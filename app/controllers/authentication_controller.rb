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
        render :json => {:error => "notpresent", :cause => "email"}, :status => :bad_request
      # If user's password does not match password input, return error
      elsif BCrypt::Password.new(@user.password) != "#{params[:password]}#{@user.salt}" # If BCrypt password from database != input password + database salt
        render :json => {:error => "wrong", :cause => "password"}, :status => :bad_request
      # If email exists, and password input matches database, return token.
      else
        token = generate_token(params[:email])
        render :json => {:token => token}
      end
    end
  end

  def register
    # If frontend did not send required parameter, return error
    if verify_parameters([:email, :password])
      @user = User.new
      
      # Set user email and password as provided by front end
      @user.password = params[:password]
      @user.email = params[:email]

      # If saved in database, return OK
      if @user.save
        token = generate_token(params[:email])
        render :json => {:token => token}
      # If it couldn't be saved, return error message and cause from model
      else
        key_with_error = @user.errors.keys.first
        render :json => {:error => @user.errors.messages[key_with_error].first, :cause => key_with_error}, :status => :bad_request
      end
    end
  end
end