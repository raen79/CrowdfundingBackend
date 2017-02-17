class UpdateController < ApplicationController
	
	include UpdateHelpers

	def add_update #Dom
		#verify that front end sent required parameters
		if verify_parameters([:project_id, :name, :description]) && verify_access_rights(@current_user, params[:project_id], true) #also verify user
			
			#create update
			@update = Project.find(params[:project_id]).project_updates.new

			#add user
			@update.user = @current_user
			#add project_name
			@update.name = params[:name]
			#add project_description
			@update.description = params[:description]
			
			#save project, else fail
			if @update.save
				render :json => {:token => @token}
			else
				key_with_error = @update.errors.keys.first
				render :json => {:error => @update.errors.messages[key_with_error].first, :cause => key_with_error}, :status => :bad_request
			end
		end
	end

	def modify_update #Dom
		@update = Update.find(params[:id])
		@project = @update.project
		#verify user has right to modify update
		if verify_access_rights(@current_user, @project.id, true)

			#get attributes for updating
			@attr_to_update = attr_to_update([:name, :description])
			
			if !@update.blank?
				@update.update_attributes(@attr_to_update)
				render :json => {:token => @token}
			else
				render :json => {:error => 'invalid', :cause => '!existent_update'}
			end
		else #user failed to verify
			render :json => {:error => 'denied', :cause => 'id'}, :status => :bad_request
		end
	end

	def delete_update 	#Matt
        @deleted_updates = []	# Variable to store all updates which were successfully deleted

    	if verify_parameters([:id])		# Verify that array of ID's was sent
    	    params[:id].each do |id| 	# Iterate through each ID
        	if verify_delete_rights(@current_user, id, false) # Check if this user is allowed to delete the update with the ID provided
        	  update_to_delete = Update.find(id)
          		if !update_to_delete.blank?		# When the id is found, push it to @deleted_updates variable
            		@deleted_updates.push(update_to_delete.name)
            		update_to_delete.destroy
          		end
        	end
      	  end
      	  render :json => {:values => @deleted_updates, :type => "deleted_updates", :token => @token}
      	end
  	end

	def view_update 	#Matt
		if verify_parameters([:id])		# Verify that page data was sent
			@update_to_view = Update.find(params[:id])
			if @update_to_view.approved? || (!@update_to_view.approved? && verify_access_rights(params[:id], true))		# If update exists and id has access rights, return update back to frontend
				@response = @update_to_view.updates_info	# set @response so it contains all infomation which frontend wants
				@response[:token] = @token		# Give @response a token
				render :json => @response 		# Send @response to frontend
			end
		end
	end
end