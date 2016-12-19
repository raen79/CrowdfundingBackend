module ApplicationHelpers
  def verify_parameters(required_params)
    # Loop through each parameter
    required_params.each do |param|
      # If parameter was not sent, return error
      if !params.has_key?(param)
        render :json => {:error => "#{param.to_s} missing", :cause => "param"}, :status => :bad_request
        return false
      end
    end
    # If no error through loop, return true
    return true
  end

  def generate_token(email)
    # Set the subject of the token to user's email and its expiration date to 4 hours from now
    payload = {:sub => params[:email], :exp => Time.now.to_i + 14400}
    # Set HMAC secret for token authentication. 128 bit secret as per recommendation of => http://security.stackexchange.com/questions/95972/what-are-requirements-for-hmac-secret-key
    hmac_secret = "4@X18qo&&K#kYgfxkXlvr3K!DJThU^5L"
    token = JWT.encode payload, hmac_secret, "HS512"
    return token
  end

  def decode_token(token)
    # Set HMAC secret for token authentication. 128 bit secret as per recommendation of => http://security.stackexchange.com/questions/95972/what-are-requirements-for-hmac-secret-key
    hmac_secret = "4@X18qo&&K#kYgfxkXlvr3K!DJThU^5L"
    # Object representing information stored in token
    decoded_token = JWT.decode token, hmac_secret, true, { :algorithm => "HS512" }
    return decoded_token
  end

  def verify_access_rights(current_user, id)
    unless @current_user.id == id || @current_user.admin == true
      render :json => {:error => 'noaccess', :cause => 'user'}, :status => :bad_request
      return false
    end

    return true
  end

  def attr_to_update(params, attributes)
    @attr_to_update = Hash.new
    # Iterate through attributes
    attributes.each do |attribute|
      # If the attribute exists in params sent by front end, add it to hash of attributes to update
      if !params[attribute].blank?
        @attr_to_update[attribute] = params[attribute]
      end
    end

    return @attr_to_update
  end
end