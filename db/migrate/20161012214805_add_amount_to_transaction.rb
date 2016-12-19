class AddAmountToTransaction < ActiveRecord::Migration[5.0]
  def change
    add_column :transactions, :amount, :integer
  end
end
