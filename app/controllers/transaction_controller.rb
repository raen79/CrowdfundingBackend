class TransactionController < ApplicationController

    def new_transaction
        #Create new transaction which is processed and stored in DB

        # If frontend did not send required parameter, return error
        if verify_parameters([:amount, :project_id, :user_id])
            # New transaction owned by user
            @transaction = @current_user.transactions.new

            # Set up transaction info as provided by frontend
            @transaction.amount = params[:amount]
            @transaction.project_id = params[:project_id]
            @transaction.user_id = params[:user_id]

            if @transaction.save
              render :json => {:token => @token}
            else
              key_with_error = @transaction.errors.keys.first
              render :json => {:error => @transaction.errors.messages[key_with_error].first, :cause => key_with_error}, :status => :bad_request
            end   

        end

    end

    def refund_transaction
    #Externally process refund and then update DB entry, setting 'refunded' to true

        if verify_parameters([:transaction_id, :amount, :project_id, :user_id])

            #find transcation by ID
            @transaction = Transaction.find(params[:transaction_id])

            #if transaction exists,
            if !@transaction.blank?

                @transaction.update_attribute :refunded, "TRUE"

                if @transaction.save
                  render :json => {:token => @token}
                else
                  key_with_error = @transaction.errors.keys.first
                  render :json => {:error => @transaction.errors.messages[key_with_error].first, :cause => key_with_error}, :status => :bad_request
                end 

            end

        end

    end

    def view_transactions
    #Return transactions in user specified format

        if verify_parameters([:order, :filter, :page, :page_size])

            @transactions = Transaction.find(:all)

        end

end

end