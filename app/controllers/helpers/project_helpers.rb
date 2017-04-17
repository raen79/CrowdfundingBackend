module ProjectHelpers
  def verify_access_rights(id, with_render)
    if @current_user.blank?
      check_token(false)
    end

    unless !@current_user.blank? && (@current_user.id == Project.find(id).user.id || @current_user.admin == true)
      if with_render
        render :json => {:error => 'noaccess', :cause => 'user'}, :status => :bad_request
      end
      return false
    end

    return true
  end

  def return_projects_model(sorts)
      sorts.each do |sort|
          if sort["column"] == "backers"
              return Project.approved.select("projects.*", "COUNT(distinct transactions.user_id)").left_joins(:transactions).group("projects.id")
          elsif sort["column"] == "votes"
              return Project.approved.left_joins(:votes).group("projects.id")
          end
      end

      return Project.approved
  end

  def return_projects_sort(sorts)
    sorts.each do |sort|
          if sort["column"] == "backers"
              sort["column"] = "COUNT(distinct transactions.user_id)"
          elsif sort["column"] == "votes"
              sort["column"] = "coalesce(SUM(votes.value), 0)"
          end
    end

    return sorts
  end
end