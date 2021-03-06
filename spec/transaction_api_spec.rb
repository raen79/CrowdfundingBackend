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

  #NEW TRANSACTION
  describe "PUT /api/transaction/" do
    it "creates a new transaction" do
      params = {
        :amount => 10,
        :project_id => 1
      }

      put '/api/transaction/',
        :params => params.to_json,
        :headers => {"Token" => @token, 'Content-Type': 'application/json'}

      expect(body['token'])
      expect(response.status).to eq 200

    end
  end

  #NEW TRANSACTION FAIL
  describe "PUT /api/transaction/" do
    it "fails at creating a new transaction" do
      params = {
        :project_id => 1
      }

      put '/api/transaction/',
        :params => params.to_json,
        :headers => {"Token" => @token, 'Content-Type': 'application/json'}

      body = JSON.parse(response.body)

      expect(response.status).to eq 400
      expect(body['error']).to eq 'amount missing'
      expect(body['cause']).to eq 'param'

    end
  end

  #REFUND TRANSACTION
  describe "PUT /api/refund_transaction/" do
    before do
      create :transaction, :id => 2, :created_at => "2017-03-12 12:40:20.206749", :amount => 470, :project_id => 1, :user_id => 1
    end

    it "refunds an existing transaction" do
      params = {
        :transaction_id => 2,
        :amount => 470
      }

      put '/api/refund_transaction/',
        :params => params.to_json,
        :headers => {"Token" => @token, 'Content-Type': 'application/json'}

      expect(response.status).to eq 200
    end
  end

  #REFUND TRANSACTION FAIL
  describe "PUT /api/refund_transaction/" do
    before do
      create :transaction, :id => 2, :created_at => "2017-03-12 12:40:20.206749", :amount => 470, :project_id => 1, :user_id => 1
    end

    it "refunds an existing transaction" do
      params = {
        :transaction_id => 2
      }

      put '/api/refund_transaction/',
        :params => params.to_json,
        :headers => {"Token" => @token, 'Content-Type': 'application/json'}

    
      body = JSON.parse(response.body)

      expect(response.status).to eq 400
      expect(body['error']).to eq 'amount missing'
      expect(body['cause']).to eq 'param'

    end
  end

  #SEARCH TRANSACTIONS
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
      expect(body['token'])
      expect(body['transactions']) == [{"id" => 2, "date" => "2017-03-12 12:40:20.206749", "amount" => 470, "project_id" => 1, "user_id" => 1}]
      expect(response.status).to eq 200

    end
  end

  #SEARCH TRANSACTIONS FAIL
  describe "GET /api/transaction/" do
    before do
      create :transaction, :id => 2, :created_at => "2017-03-12 12:40:20.206749", :amount => 470, :project_id => 1, :user_id => 1
    end

    it "returns specific transactions" do
      params = {
        :filter => [{"column":"amount", "operator":"isnotnull"}].to_json,
        :page => 1,
        :page_size => 15
      }

      get '/api/transaction/',
        :headers => {"Token" => @token},
        :params => params
      

      body = JSON.parse(response.body)

      expect(response.status).to eq 400
      expect(body['error']).to eq 'order missing'
      expect(body['cause']).to eq 'param'


    end
  end
end