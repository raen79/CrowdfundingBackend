class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.integer :funding_goal
      t.string :video
      t.string :image
      t.boolean :approved
      t.boolean :deleted
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
