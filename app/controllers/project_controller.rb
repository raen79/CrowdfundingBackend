class ProjectController < ApplicationController

  include ProjectHelpers

  def add_project
    # Verify that minimum required parameters for project creation were sent by front end
    if verify_parameters([:name, :description, :funding_goal])
      # New project owned by user
      @project = @current_user.projects.new

      # Set up user info as provided by frontend
      @project.name = params[:name]
      @project.description = params[:description]
      @project.funding_goal = params[:funding_goal]
      @project.video = params[:video]
      @project.image = params[:image]

      # If project is saved in the database, return OK
      if @project.save
        render :json => {:token => @token}
      else
        key_with_error = @project.errors.keys.first
        render :json => {:error => @project.errors.messages[key_with_error].first, :cause => key_with_error}, :status => :bad_request
      end
    end
  end

  def modify_project
    # Verify that user has the right to modify the project
    if verify_access_rights(@current_user, params[:id], true)
      # Find the project to modify
      @project = Project.find(params[:id])

      # Get list of attributes to update (as determined by what is sent by the front end)
      @attr_to_update = attr_to_update([:name, :description, :funding_goal, :video, :image])

      # If project exists, update attributes accordingly
      if !@project.blank?
        @project.update_attributes(@attr_to_update)
        render :json => {:token => @token}
      else
        render :json => {:error => 'invalid', :cause => 'id'}, :status => :bad_request
      end
    end
  end

  def delete_project
    # Variable to store all projects that were successfully deleted
    @deleted_projects = []

    # Verify that array of ID's was sent
    if verify_parameters([:id])
      # Iterate through ID's
      params[:id].each do |id|
        # If this user is allowed to delete the project with the ID provided
        if verify_access_rights(@current_user, id, false)
          project_to_delete = Project.find(id)
          if !project_to_delete.blank?
            @deleted_projects.push(project_to_delete.name)
            project_to_delete.destroy
          end
        end
      end
      render :json => {:values => @deleted_projects, :type => "deleted_projects", :token => @token}

    end
  end

  def approve_project
    # Verify that minimum required parameters for project approval were sent by front end
    if verify_parameters([:id, :boolean])
      
    end
  end
end