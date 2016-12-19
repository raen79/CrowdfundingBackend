class ChangeDeleted3InUser < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :deleted, :date
    add_column :users, :deleted, :boolean
  end
end
