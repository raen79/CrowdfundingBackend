class ChangeDeleted2InUser < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :deleted, :boolean
    add_column :users, :deleted, :time
  end
end
