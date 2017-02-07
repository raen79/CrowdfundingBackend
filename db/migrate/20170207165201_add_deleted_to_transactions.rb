class AddDeletedToTransactions < ActiveRecord::Migration[5.0]
  def change
    add_column :transactions, :deleted, :boolean
  end
end
