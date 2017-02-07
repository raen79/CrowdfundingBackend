module UpdateHelpers #Dom
  def verify_access_rights(current_user, project_id, with_render)
    unless @current_user.id == Project.find(project_id).user.id || @current_user.admin == true
      if with_render
        render :json => {:error => 'noaccess', :cause => 'user'}, :status => :bad_request
      end
      return false
    end

    return true
  end
end