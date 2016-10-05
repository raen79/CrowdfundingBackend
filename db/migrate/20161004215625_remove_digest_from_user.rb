class RemoveDigestFromUser < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :password_digest, :string
    remove_column :users, :password_hash, :string
  end
end
