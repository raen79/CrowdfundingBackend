class ChangeCTypeInComments < ActiveRecord::Migration[5.0]
  def change
  	rename_column :comments, :c_type, :comment_type_id
  end
end
