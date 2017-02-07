class ChangeSubjectInComments < ActiveRecord::Migration[5.0]
  def change
  	rename_column :comments, :subject_id, :project_id
  end
end
