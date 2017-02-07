class UpdateController < ApplicationController
	
	include UpdateHelpers

	def add_update
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

	def modify_update
		@update = Update.find(params[:id])
		@project = @update.project

		#verify user has right to modify update
		if verify_access_rights(@current_user, @project.id, true)

		end
	end

	def deleted_updates	# I believe this works, needs to be double checked however
    	# Variable to store all updates which were successfully deleted
    	@deleted_updates = []

    	# Verify that array of ID's was sent
    	if verify_parameters([:id])
    	  # Iterate through each ID
    	  params[:id].each do |id|
        	# Check if this user is allowed to delete the update with the ID provided
        	if verify_access_rights(@current_user, id, false)
        	  update_to_delete = Update.find(id)
          		if !update_to_delete.blank?
            		@deleted_updates.push(update_to_delete.email)	#change email
            		update_to_delete.destroy
          		end
        	end
      	  end
      	  render :json => {:values => @deleted_updates, :type => "deleted_updates"}
      	end
  	end

	def view_update	# Nowhere near finished
		# Verify that page data was sent
		if verify_parameters([:id])
			@update_to_view = Update.find(params[:id])
			# If update exists, return update back to frontend
			unless @update_to_view.blank?
				@response = @update_to_view.info
				render :json => @response
			else
				render :json => {:error => 'invalid', :cause => 'id'}, :status => :bad_request
			end
		end
	end
	
end