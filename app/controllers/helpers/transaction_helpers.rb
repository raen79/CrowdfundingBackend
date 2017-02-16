module TransactionHelpers

  def verify_access_rights(with_render)
    unless !@current_user.blank? && @current_user.admin == true
      if with_render
        render :json => {:error => 'noaccess', :cause => 'user'}, :status => :bad_request
      end
      return false
    end

    return true
  end

end