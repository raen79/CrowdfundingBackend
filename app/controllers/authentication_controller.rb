class AuthenticationController < ApplicationController
  skip_before_action :check_token

  def login
    # If frontend did not send email parameter, return error
    if !params.has_key?(:email)
      render :json => {:error => 'Email parameter is missing from POST request!', :cause => 'param'}, :status => :bad_request
    # If frontend did not send password parameter, return error
    elsif !params.has_key?(:password)
      render :json => {:error => 'Password parameter is missing from POST request!', :cause => 'param'}, :status => :bad_request
    # If email and password parameters where provided, begin returning token
    else
      # Retrieve user from database with certain email
      @user = User.where(:email => params[:email]).first
      # If email is not found in database, return error
      if @user.blank?
        render :json => {:error => 'Email is invalid!', :cause => 'email'}, :status => :bad_request
      # If user's password does not match password input, return error
      elsif BCrypt::Password.new(@user.password) != params[:password] + @user.salt # If BCrypt password from database != input password + database salt
        render :json => {:error => 'Password is invalid!', :cause => 'pwd'}, :status => :bad_request
      # If email exists, and password input matches database, return token.
      else
        # Set the subject of the token to user's email and its expiration date to 4 hours from now
        payload = {:sub => params[:email], :exp => Time.now.to_i + 14400}
        # Set HMAC secret for token authentication. 128 bit secret as per recommendation of => http://security.stackexchange.com/questions/95972/what-are-requirements-for-hmac-secret-key
        hmac_secret = '4@X18qo&&K#kYgfxkXlvr3K!DJThU^5L'
        token = JWT.encode payload, hmac_secret, 'HS512'

        render :json => {:token => token}
      end
    end
  end

end