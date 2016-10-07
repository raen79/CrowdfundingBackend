module ApplicationHelpers
  def verify_parameters(required_params)
    # Loop through each parameter
    required_params.each do |param|
      # If parameter was not sent, return error
      if !params.has_key?(param)
        render :json => {:error => "#{param.to_s} is missing from POST request!", :cause => "param"}, :status => :bad_request
        return false
      end
    end
    # If no error through loop, return true
    return true
  end
end

class ApplicationController < ActionController::API
  # Check that the user is correctly logged in before any API call
  before_action :check_token
  include ApplicationHelpers

  def check_token
    if !request.headers["Token"].blank?
      token = request.headers["Token"]
      # If token valid, store user in @current_user variable. Then store refreshed token in @token variable (+4 hours)
      begin
        # Set HMAC secret for token authentication. 128 bit secret as per recommendation of => http://security.stackexchange.com/questions/95972/what-are-requirements-for-hmac-secret-key
        hmac_secret = "4@X18qo&&K#kYgfxkXlvr3K!DJThU^5L"
        # Object representing information stored in token
        decoded_token = JWT.decode token, hmac_secret, true, { :algorithm => "HS512" }
        # Retrieve user"s email from decoded token subject. Store in local variable user_email.
        user_email = decoded_token[0]["sub"]
        # Retrieve the user from the database using their email and store in instance variable @current_user (will be accessible in other controllers)
        @current_user = User.where(:email => user_email).first
        # If user does not exist, return error
        render :json => {:error => "Payload subject does not exist in the database!", :cause => "token"}, :status => :bad_request if @current_user.blank?

        # Refresh token expiration to four hours from now (user token will only be expired if he has not logged in in 4 hours)
        payload = decoded_token.first
        payload["exp"] = Time.now.to_i + 14400
        # Store new refreshed token in instance variable @token (will be available from other controllers). The @token must be returned in every successful api call.
        @token = JWT.encode payload, hmac_secret, "HS512"
      # If Token Expired, return error
      rescue JWT::ExpiredSignature
        render :json => {:error => "Token has expired!", :cause => "token"}, :status => :bad_request
      end
    # If token does not exist, return error
    else
      render :json => {:error => "User is not logged in!", :cause => "token"}, :status => :bad_request
    end
  end
end