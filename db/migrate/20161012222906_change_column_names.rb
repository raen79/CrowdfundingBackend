class ChangeColumnNames < ActiveRecord::Migration[5.0]
  def change
    rename_column :vote_types, :type, :name
    rename_column :comment_types, :type, :name
  end
end
