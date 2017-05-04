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

RSpec.describe "Project", :type => :request do
  before do |example|
    unless example.metadata[:skip_before]
      create :project
      @token = generate_token
    end
  end

  ## add_project (PUT)
  describe "PUT /api/project", :skip_before do
    before do
      create :user
      @token = generate_token
    end
    
    it "creates a new project in the database" do
      params = {
        :name => "Community Project 3",
        :description => "Lorem ipsum dolor sit amet, consectetur adipiscing elits. Pellentesque quis condimentum elit. Nullam risus erat, suscipit nec lacinia at, ornare at turpis. Cras vulputate magna nisl, id porttitor est semper vestibulum. Suspendisse id sollicitudin ipsum. Donec elementum felis dolor, sed malesuada sed.",
        :funding_goal => 50000
      }

      expect {
        put '/api/project', :params => params.to_json, :headers => {'Content-Type': 'application/json', 'Token': @token}
        }.to change{Project.count}.by(1)

      params.each do |param, value|
        expect(Project.last[param]).not_to be_nil
      end
    end
  end

  ## modify_project (PATCH)
  describe "PATCH /api/project" do
    it "modifies the project in the database" do
      params = {
        :id => 1,
        :name => "Community Project 3",
        :description => "Lorem ipsum dolor sit amet, consectejtur adipiscing elits. Pellentesque quis condimentum elit. Nullam risus erat, suscipit nec lacinia at, ornare at turpis. Cras vulputate magna nisl, id porttitor est semper vestibulum. Suspendisse id sollicitudin ipsum. Donec elementum felis dolor, sed malesuada sed.",
        :funding_goal => 50000
      }

      expect {
        patch '/api/project', :params => params.to_json, :headers => {'Content-Type': 'application/json', 'Token': @token}
      }.to change{Project.find(params[:id]).name}
        .and change{Project.find(params[:id]).description}
        .and change{Project.find(params[:id]).funding_goal}
    end
  end

  ## delete_project (DELETE)
  describe "DELETE /api/project" do
    before do 
      create :project, :id => 2, :name => "Community Project 3", :description => "Lorem ipsum dolor sit amet, consectejtur adipiscing elits. Pellentesque quis condimentum elit. Nullam risus erat, suscipit nec lacinia at, ornare at turpis. Cras vulputate magna nisl, id porttitor est semper vestibulum. Suspendisse id sollicitudin ipsum. Donec elementum felis dolor, sed malesuada sed.", :funding_goal => 50000, :user_id => 1
      create :project, :id => 3, :name => "Community Project 4", :description => "Lorem ipsum dolor sit amet, consectejtur adipiscing elits. Pellentesque quis condimentum elit. Nullam risus erat, suscipit nec lacinia at, ornare at turpis. Cras vulputate magna nisl, id porttitor est semper vestibulum. Suspendisse id sollicitudin ipsum. Donec elementum felis dolor, sed malesuada sed.", :funding_goal => 50000, :user_id => 1
    end

    it "deletes the projects in the database" do
      params = { :id => [2, 3] }

      expect {
        delete '/api/project', :params => params.to_json, :headers => {'Content-Type': 'application/json', 'Token': @token}
      }.to change{Project.count}.by(-2)
    end
  end

  ## view_project (GET)
  describe "GET /api/project/:id" do
    before do 
      create :project, :id => 2, :name => "Community Project 3", :description => "Lorem ipsum dolor sit amet, consectejtur adipiscing elits. Pellentesque quis condimentum elit. Nullam risus erat, suscipit nec lacinia at, ornare at turpis. Cras vulputate magna nisl, id porttitor est semper vestibulum. Suspendisse id sollicitudin ipsum. Donec elementum felis dolor, sed malesuada sed.", :funding_goal => 50000, :approved => true, :user_id => 1
    end

    it "returns the specified project" do
      get '/api/project/2', :headers => {"Token" => @token}
      expect(response.status).to eq 200

      body = JSON.parse(response.body)
      expect(body["name"]).to eq "Community Project 3"
      expect(body["description"]).to eq "Lorem ipsum dolor sit amet, consectejtur adipiscing elits. Pellentesque quis condimentum elit. Nullam risus erat, suscipit nec lacinia at, ornare at turpis. Cras vulputate magna nisl, id porttitor est semper vestibulum. Suspendisse id sollicitudin ipsum. Donec elementum felis dolor, sed malesuada sed."
      expect(body["funding_goal"]).to eq 50000
      expect(body["video"]).to be_nil
      expect(body["user"]).not_to be_nil
      expect(body["updates"]).to be_empty
      expect(body["comments"]).to be_empty
      expect(body["votes"]).to eq 0
    end
  end

  ## view_projects (GET)
  describe "GET /api/project" do
    before do 
      create :project, :id => 2, :name => "Test Project 2", :description => "Lorem ipsum dolor sit amet, consectejtur adipiscing elits. Pellentesque quis condimentum elit. Nullam risus erat, suscipit nec lacinia at, ornare at turpis. Cras vulputate magna nisl, id porttitor est semper vestibulum. Suspendisse id sollicitudin ipsum. Donec elementum felis dolor, sed malesuada sed.", :funding_goal => 50000, :user_id => 1, :approved => true
      create :project, :id => 3, :name => "Community Project 4", :description => "Lorem ipsum dolor sit amet, consectejtur adipiscing elits. Pellentesque quis condimentum elit. Nullam risus erat, suscipit nec lacinia at, ornare at turpis. Cras vulputate magna nisl, id porttitor est semper vestibulum. Suspendisse id sollicitudin ipsum. Donec elementum felis dolor, sed malesuada sed.", :funding_goal => 50000, :user_id => 1, :approved => true
    end
    
    it "returns 1 project with id = 2" do
      get '/api/project', :params => {:filter => '[{"column":"name", "value":"t", "operator":"startswith"}, {"column":"image","operator":"isnull"}]',
                                                                  :sort => '[{"column":"name", "order":"desc"}, {"column":"funding_goal","order":"desc"}]',
                                                                  :page => 1,
                                                                  :page_size => 15},
                                              :headers => {"Token" => @token}
      expect(response.status).to eq 200

      body = JSON.parse(response.body)["project"]
      number_of_results = body.size
      first_id = body[0]["id"]

      expect(number_of_results).to eq 1
      expect(first_id).to eq 2
    end
  end

  ## approve_project (PATCH)
  describe "PATCH /api/approve_project" do
    it "sets the project's 'approved' attribute to true" do
      params = {
        :id => 1,
        :approved => true
      }

      expect{
        patch '/api/approve_project', :params => params.to_json, :headers => {'Content-Type': 'application/json', 'Token': @token}
      }.to change{Project.find(params[:id]).approved}.to true
    end
  end
end