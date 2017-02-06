module AuthenticationHelpers
  def verify_access_rights(id, with_render)
    unless @current_user.id == id || @current_user.admin == true
      if with_render
        render :json => {:error => 'noaccess', :cause => 'user'}, :status => :bad_request
      end
      return false
    end

    return true
  end
end