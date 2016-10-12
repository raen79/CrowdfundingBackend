class AuthenticationController < ApplicationController
  skip_before_action :check_token

  def login
    # If frontend did not send required parameter, return error
    if verify_parameters([:email, :password])
      ## If email and password parameters where provided, begin returning token
      # Retrieve user from database with certain email
      @user = User.where(:email => params[:email]).first
      # If email is not found in database, return error
      if @user.blank?
        render :json => {:error => "Email is invalid!", :cause => "email"}, :status => :bad_request
      # If user's password does not match password input, return error
      elsif BCrypt::Password.new(@user.password) != "#{params[:password]}#{@user.salt}" # If BCrypt password from database != input password + database salt
        render :json => {:error => "Password does not match email address!", :cause => "pwd"}, :status => :bad_request
      # If email exists, and password input matches database, return token.
      else
        # Set the subject of the token to user's email and its expiration date to 4 hours from now
        payload = {:sub => params[:email], :exp => Time.now.to_i + 14400}
        # Set HMAC secret for token authentication. 128 bit secret as per recommendation of => http://security.stackexchange.com/questions/95972/what-are-requirements-for-hmac-secret-key
        hmac_secret = "4@X18qo&&K#kYgfxkXlvr3K!DJThU^5L"
        token = JWT.encode payload, hmac_secret, "HS512"
        render :json => {:token => token}
      end
    end
  end

  def register
    # If frontend did not send required parameter, return error
    if verify_parameters([:email, :password])
      # Check if it is an email, otherwise return error
      if !params[:email].match(/\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i).present?
        render :json => {:error => "Email is invalid!", :cause => "email", :type => "invalid"}, :status => :bad_request
      # Check if email does not exist, otherwise return error
      elsif !User.where(:email => params[:email]).first.blank?
        render :json => {:error => "Email exists!", :cause => "email", :type => "exists"}, :status => :bad_request
      # Check if password is longer than 8 characters, otherwise return error
      elsif !params[:password].match(/.{8,}/).present?
        render :json => {:error => "Password is invalid!", :cause => "pwd", :type => "invalid"}, :status => :bad_request
      # Save information in database if all information is correct
      else
        @user = User.new
        # Random string solution from stackoverflow => http://stackoverflow.com/questions/88311/how-best-to-generate-a-random-string-in-ruby
        # Salt is 256 bits long as per recommendation of => Practical Cryptography (Ferguson, Schneier)
        @user.salt = rand(36**64).to_s(36)
        @user.password = BCrypt::Password.create(params[:password] + @user.salt)
        @user.email = params[:email]
        if @user.save
          head :ok
        else
          render :json => {:error => "There was an error saving the user in the database, please try again later", :cause => "db"}, :status => :internal_server_error
        end
      end
    end
  end
end