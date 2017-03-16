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

RSpec.describe "Transaction", :type => :request do
  before do
    create :project
    @token = generate_token
  end

  describe "PUT /api/transaction/" do
    it "creates a new transaction" do
      params = {
        :amount => 10,
        :project_id => 1
      }

      put '/api/transaction/',
        :params => params.to_json,
        :headers => {"Token" => @token, 'Content-Type': 'application/json'}

      expect(response.status).to eq 200

    end
  end

  describe "PUT /api/refund_transaction/" do
    before do
      create :transaction
    end

    it "refunds an existing transaction" do
      params = {
        :transaction_id => 1,
        :amount => 500
      }

      put '/api/refund_transaction/',
        :params => params.to_json,
        :headers => {"Token" => @token, 'Content-Type': 'application/json'}

      expect(response.status).to eq 200
    end
  end

  describe "GET /api/transaction/" do
    before do
      create :transaction, :id => 2, :created_at => "2017-03-12 12:40:20.206749", :amount => 470, :project_id => 1, :user_id => 1
    end

    it "returns specific transactions" do
      params = {
        :order => [{"column":"created_at", "order":"asc"}].to_json,
        :filter => [{"column":"amount", "operator":"isnotnull"}].to_json,
        :page => 1,
        :page_size => 15
      }

      get '/api/transaction/',
        :headers => {"Token" => @token},
        :params => params
      body = JSON.parse(response.body)
      expect(body['transactions']) == [{"id" => 2, "date" => "2017-03-12 12:40:20.206749", "amount" => 470, "project_id" => 1, "user_id" => 1}]
      expect(response.status).to eq 200

    end
  end
end