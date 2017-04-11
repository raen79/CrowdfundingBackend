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

RSpec.describe "Authentication", :type => :request do
  before do
    create :user
    @token = generate_token
  end

  ## view_user (GET)
  describe "GET /api/authentication/:id" do
    before do 
      create :user, :id => 2, :email => "eran.peer79@gmail.com", :password => "P@ssw0rd", :f_name => "Second", :l_name => "User"
    end

    it "returns the specified user" do
      get '/api/authentication/2', :headers => {"Token" => @token}
      expect(response.status).to eq 200

      body = JSON.parse(response.body)
      user_email = body['email']
      expect(user_email).to eq 'eran.peer79@gmail.com'
    end
  end

  ## view_users (GET)
  describe "GET /api/authentication" do
    before do 
      create :user, :id => 2, :email => "eran.peer79@gmail.com", :password => "P@ssw0rd", :f_name => "Second", :l_name => "User"
    end
    
    it "returns 1 user with id = 2" do
      get '/api/authentication', :params => {:filter => '[{"column":"email", "value":"e", "operator":"startswith"}, {"column":"birth_date","operator":"isnull"}]',
                                                                  :sort => '[{"column":"email", "order":"desc"}, {"column":"id","order":"desc"}]',
                                                                  :page => 1,
                                                                  :page_size => 15},
                                              :headers => {"Token" => @token}
      expect(response.status).to eq 200

      body = JSON.parse(response.body)["user"]
      number_of_results = body.size
      first_id = body[0]["id"]

      expect(number_of_results).to eq 1
      expect(first_id).to eq 2
    end
  end
end