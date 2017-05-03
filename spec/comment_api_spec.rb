require "rails_helper"

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

RSpec.describe "Comment", :type => :request do
	
	before do
		create :comment_type
		create :project
		@token = generate_token
	end	

	describe "PUT /api/comment/ :id" do #test add comment
		it "adds comment to the database" do
			params = {
				:subject_id => 1,
				:content => "add test is working",
				:type => "PROJECT"
			}
			put '/api/comment/',
				:params => params.to_json,
	    			:headers => {"Token" => @token, 'Content-Type': 'application/json'}

	  		body = JSON.parse(response.body)
	  		expect(response.status).to eq 200
		end
	end

	describe "DEL /api/comment/ :id" do #test delete comment
		before do
			create :user, :id => 3, :email => "eran.peer79@gmail.com", :password => "P@ssw0rd", :f_name => "Second", :l_name => "User"
			create :comment, :id => 100, :content => "jeremy is pretty", :user_id => 1,   :comment_type_id => 1, :project_id => 1
		end
		it "delete from database" do
			params = {
				:id => 100
			}
			delete '/api/comment/',
				:params => params.to_json,
				:headers => {"Token" => @token, 'Content-Type': 'application/json'}

			body = JSON.parse(response.body)
			expect(response.status).to eq 200	
		end
	end

	describe "GET /api/comment :id" do #test view comment
		before do
			create :user, :id => 3, :email => "eran.peer79@gmail.com", :password => "P@ssw0rd", :f_name => "Second", :l_name => "User"
			create :comment, :id => 100, :content => "jeremy is pretty", :user_id => 3 ,   :comment_type_id => 1, :project_id => 1
		end

		it "returns the comment from given id number" do
			get '/api/comment/100', :headers => {"Token" => @token}
			expect(response.status).to eq 200

			body = JSON.parse(response.body)
			comment_content = body["content"]
			expect(comment_content) == "jeremy is pretty"
		end
	end
end