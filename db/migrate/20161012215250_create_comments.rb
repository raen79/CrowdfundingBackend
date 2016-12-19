class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :content
      t.boolean :deleted
      t.belongs_to :user, foreign_key: true
      t.belongs_to :comment_type, foreign_key: true
      t.belongs_to :update, foreign_key: true
      t.belongs_to :project, foreign_key: true

      t.timestamps
    end
  end
end
