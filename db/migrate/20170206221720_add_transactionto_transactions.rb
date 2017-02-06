class AddTransactiontoTransactions < ActiveRecord::Migration[5.0]
  def change
    add_reference :transactions, :transaction, index: true
  end
end
