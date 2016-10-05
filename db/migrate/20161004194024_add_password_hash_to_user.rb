class AddPasswordHashToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :password_hash, :string
    remove_column :users, :password, :string
  end
end
