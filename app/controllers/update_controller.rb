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

	def delete_update
		#verify 

	end

	def view_update
		#wut

	end
end