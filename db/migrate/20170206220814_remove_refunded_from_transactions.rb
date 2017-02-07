class RemoveRefundedFromTransactions < ActiveRecord::Migration[5.0]
  def change
    remove_column :transactions, :refunded, :boolean
  end
end
