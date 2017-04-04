require 'rails_helper'

def generate_token
  params = {
    :email => "admin@admin.com",
    :password => "administrator"
  }

  post '/api/authentication',
    :params => params.to_json,
    :headers => { 'Content-Type': 'application/json' }

  body = JSON.parse(response.body)
  body['token']
end

RSpec.describe "Update", :type => :request do
	before do
		create :project
		@token = generate_token
	end

	describe "DEL /api/update/" do	#test delete_update Nathan PASS
		before do
			create :update, :id => 1, :created_at => "2017-03-12 12:40:20.206749", :updated_at => "2017-03-12 12:40:20.206749", :user_id => 1, :project_id => 1
		end

		it "deletes the specified update" do
			params = {
				:id => [1]
			}

			delete '/api/update',
				:params => params.to_json,
				:headers => {"Token" => @token, 'Content-Type': 'application/json'}
			#print JSON.parse(response.body)
			expect(response.status).to eq 200
		end		
	end

	describe "DEL /api/update/" do 	#test delete_update for failure Matthew PASS
		before do
			create :update, :id => 1, :created_at => "2017-03-12 12:40:20.206749", :updated_at => "2017-03-12 12:40:20.206749", :user_id => 1, :project_id => 1
		end

		it "Failure to delete update! id is missing." do
			params = {
			}

			delete '/api/update/',
			:params => params.to_json,
			:headers => {"Token" => @token, 'Content-Type': 'application/json'}

			expect(response.status).to eq 400
		end
	end

	describe "GET /api/update/:id" do	#test view_update .matt FAIL
		before do
			create :update, :id => 1, :created_at => "2017-03-12 12:40:20.206749", :updated_at => "2017-03-12 12:40:20.206749", :user_id => 1, :project_id => 1
		end

		it "returns the specified users update" do
			get '/api/update/1', :headers => {"Token" => @token}
			expect(response.status).to eq 200

			body = JSON.parse(response.body)
			user_email = body['email']
			expect(user_email) == 'admin@admin.com'
		end

	end

	describe "PUT /api/update" do #test add update Nathan PASS
		it "creates a new update" do
			params={:project_id => 1, :name => "Update test", :description => "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec."}
			
			put '/api/update',
				:params => params.to_json,
				:headers => {"Token" => @token, 'Content-Type': 'application/json'}
			#print JSON.parse(response.body)
			expect(response.status).to eq 200
		end
	end

	describe "PUT /api/update" do #test add_update for failure Matthew PASS
		it "failure to add update! project id is missing." do
			params={:name => "Update test", :description => "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec."}
			
			put '/api/update',
				:params => params.to_json,
				:headers => {"Token" => @token, 'Content-Type': 'application/json'}
			expect(response.status).to eq 400
		end
	end

	describe "PATCH /api/update" do #test modify update Nathan PASS
		before do
			create :update, :id => 1, :created_at => "2017-03-12 12:40:20.206749", :updated_at => "2017-03-12 12:40:20.206749", :user_id => 1, :project_id => 1
		end

		it "modifies a project" do
			params={
				:id => 1,
				:name => "Modify update name",
				:description => "MODIFIED Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec."
			}
			patch '/api/update',
				:params => params.to_json,
				:headers => {"Token" => @token, 'Content-Type': 'application/json'}
			#print JSON.parse(response.body)
			expect(response.status).to eq 200
		end
	end
end
