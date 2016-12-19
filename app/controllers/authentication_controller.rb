class AuthenticationController < ApplicationController
  # Skip token verification in login and register
  skip_before_action :check_token, :only => [:login, :register]

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
    if verify_parameters([:email, :password, :password_confirmation])
      @user = User.new
      
      # Set user info as provided by front end
      @user.password = params[:password]
      @user.email = params[:email]
      @user.f_name = params[:f_name]
      @user.l_name = params[:l_name]
      @user.birth_date = Date.parse(params[:birth_date]) rescue nil

      # If password does not match confirmation return error
      if params[:password] != params[:password_confirmation]
        render :json => {:error => 'notmatching', :cause => 'password_confirmation'}, :status => :bad_request
      end

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

  def modify_user
    # If not the user or not an admin return error
    if verify_access_rights(@current_user, params[:id])
      # If password does not match confirmation return error
      if params[:password] != params[:password_confirmation]
        render :json => {:error => 'notmatching', :cause => 'password_confirmation'}, :status => :bad_request
      end

      # Find user with id
      @user = User.find(params[:id])

      # Get attributes to update
      @attr_to_update = attr_to_update(params, [:id, :email, :f_name, :l_name, :password, :birth_date])

      # If user exists update_attributes
      if !@user.blank?
        @user.update_attributes(@attr_to_update)
        render :json => {:token => @token}
      else
        render :json => {:error => 'invalid', :cause => 'id'}, :status => :bad_request
      end
    end
  end
end