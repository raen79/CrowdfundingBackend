module CommunityHelpers

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

  	def verify_access_rights(current_user, id, with_render)
    	unless @current_user.id == id || @current_user.admin == true
      		if with_render
        		render :json => {:error => 'noaccess', :cause => 'user'}, :status => :bad_request
      		end
      		return false
    	end

    	return true
  	
  	end

      def create_or_update(vote)
          if vote.save
            render :json =>{:token => @token}
          else
            key_error = vote.errors.keys.first
            render :json => {:error => vote.errors.messages[key_error].first, :cause=> key_error}, :status => :bad_request 
          end        
      end

end