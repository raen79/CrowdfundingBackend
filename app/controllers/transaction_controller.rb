class TransactionController < ApplicationController

  include TransactionHelpers

    def new_transaction
        #Create new transaction which is processed and stored in DB

        # If frontend did not send required parameter, return error
        if verify_parameters([:amount, :project_id])
            # New transaction owned by user
            @transaction = @current_user.transactions.new

            # Set up transaction info as provided by frontend
            @transaction.amount = params[:amount]
            @transaction.project = Project.find(params[:project_id])
            @transaction.user = @current_user

            if @transaction.save
              render :json => {:token => @token}
            else
              key_with_error = @transaction.errors.keys.first
              render :json => {:error => @transaction.errors.messages[key_with_error].first, :cause => key_with_error}, :status => :bad_request
            end   

        end

    end

    def refund_transaction
    #Externally process refund and then update DB entry
      if verify_access_rights(true)
        if verify_parameters([:transaction_id, :amount])

            #find transcation by ID
            @transaction = Transaction.find(params[:transaction_id])

            # Create refund object
            @refund = Transaction.new
            @refund.amount = params[:amount].to_i
            @refund.project = @transaction.project
            @refund.user = @transaction.user

            #if transaction exists,
            if !@transaction.blank?

                @transaction.update_attribute :refund, @refund

                if @transaction.save
                  render :json => {:token => @token}
                else
                  key_with_error = @transaction.errors.keys.first
                  render :json => {:error => @transaction.errors.messages[key_with_error].first, :cause => key_with_error}, :status => :bad_request
                end 

            end
        end
      end
    end

    def view_transactions
      #Return transactions in user specified format
      if verify_access_rights(true)
        if verify_parameters([:order, :filter, :page, :page_size])
          # Start a new custom search (class created in app/classes)
          @custom_search = CustomSearch.new(Transaction.not_refund, params[:page], params[:page_size], JSON.parse(params[:order]), JSON.parse(params[:filter]))
          # Get result of search
          @results = @custom_search.results
          # Total number of results (without pagination)
          @total_items = @custom_search.total_items
          # Array to store formatted results
          @results_array = []

          # Iterate through search results and add each user's info hash to @results_array
          @results.each do |transaction|
            @results_array.push(transaction.info)
          end

          render :json => {:transactions => @results_array,  :page => params[:page], :page_size => params[:page_size], :total_items => @total_items, :token => @token}
        end
      end
    end
end