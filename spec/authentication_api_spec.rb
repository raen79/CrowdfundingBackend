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
  before do |example|
    unless example.metadata[:skip_before]
      create :user
      @token = generate_token
    end
  end

  ## login (POST)
  describe "POST /api/authentication" do
    it "returns a token (meaning that the user is logged in)" do
      params = {
        :email => "admin@admin.com",
        :password => "administrator"
      }

      post '/api/authentication', :params => params.to_json, :headers => {'Content-Type': 'application/json'}
      body = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(body['token']).to be_a(String)
    end
  end

  ## register (PUT)
  describe "PUT /api/authentication", :skip_before do
    it "creates a new user in the database" do
      params = {
        :email => "test@admin.com",
        :password => "administrator",
        :password_confirmation => "administrator",
        :birth_date => "12-10-1991"
      }

      expect {
        put '/api/authentication', :params => params.to_json, :headers => {'Content-Type': 'application/json'}
      }.to change{User.count}.by(1)

      params.each do |param, value|
        unless param == :password_confirmation
          expect(User.last[param]).not_to be_nil
        end
      end
    end
  end

  ## modify_user (PATCH)
  describe "modify_user" do
    it "modifies the user in the database" do
      params = {
        :id => 1,
        :f_name => "Name",
        :password => "new_password",
        :password_confirmation => "new_password",
        :birth_date => "12-10-1999"
      }

      expect {
        patch '/api/authentication', :params => params.to_json, :headers => {'Content-Type': 'application/json', 'Token': @token}
      }.to change{User.find(params[:id]).f_name}
        .and change{User.find(params[:id]).password}
        .and change{User.find(params[:id]).birth_date}
    end
  end

  ## delete_user (DELETE)
  describe "delete_user" do
    before do 
      create :user, :id => 2, :email => "eran.peer79@gmail.com", :password => "P@ssw0rd"
      create :user, :id => 3, :email => "eran.peer@gmail.com", :password => "P@ssw0rd"
    end

    it "deletes the users in the database" do
      params = { :id => [2, 3] }

      expect {
        delete '/api/authentication', :params => params.to_json, :headers => {'Content-Type': 'application/json', 'Token': @token}
      }.to change{User.count}.by(-2)
    end
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