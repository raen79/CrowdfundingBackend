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
		create :user
		@token = generate_token
	end

	describe "DEL /api/update/:id" do	#test delete_update
		before do
			create :user, :id => 2, :email => "eran.peer79@gmail.com", :password => "P@ssw0rd", :f_name => "Second", :l_name => "User"
		end

		it "deletes the specified users update" do
			delete '/api/update/:id'
			expect(response.status).to eq 200
		end

	end

	describe "GET /api/update/:id" do	#test view_update		I think this works? Could be my
		before do
			create :user, :id => 2, :email => "eran.peer79@gmail.com", :password => "P@ssw0rd", :f_name => "Second", :l_name => "User"
		end

		it "returns the specified users update" do
			get '/api/update/1', :headers => {"Token" => @token}
			expect(response.status).to eq 200

			body = JSON.parse(response.body)
			user_email = body['email']
			expect(user_email) == 'eran.peer79@gmail.com'
		end

	end
	
end