class ApplicationController < ActionController::API
  # Check that the user is correctly logged in before any API call
  before_action :check_token

  include ApplicationHelpers

  def check_token
    if !request.headers["Token"].blank?
      token = request.headers["Token"]
      # If token valid, store user in @current_user variable. Then store refreshed token in @token variable (+4 hours)
      begin
        # Decode token
        decoded_token = decode_token(token)
        # Retrieve user's email from decoded token subject. Store in local variable user_email.
        user_email = decoded_token[0]["sub"]
        # Retrieve the user from the database using their email and store in instance variable @current_user (will be accessible in other controllers)
        @current_user = User.where(:email => user_email).first
        puts @current_user
        # If user does not exist, return error
        render :json => {:error => "user_not_exist", :cause => "token"}, :status => :bad_request if @current_user.blank?

        # Store new refreshed token in instance variable @token (will be available from other controllers). The @token must be returned in every successful api call.
        @token = generate_token(user_email)
      # If Token Expired, return error
      rescue JWT::ExpiredSignature
        render :json => {:error => "expired", :cause => "token"}, :status => :bad_request
      end
    # If token does not exist, return error
    else
      render :json => {:error => "not_logged_in", :cause => "token"}, :status => :bad_request
    end
  end
end