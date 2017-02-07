class ChangeTypeInComments < ActiveRecord::Migration[5.0]
  def change
  	rename_column :comments, :type, :c_type
  end
end
