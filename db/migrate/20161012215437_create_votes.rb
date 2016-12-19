class CreateVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes do |t|
      t.binary :value
      t.belongs_to :user, foreign_key: true
      t.belongs_to :vote_type, foreign_key: true
      t.belongs_to :comment, foreign_key: true
      t.belongs_to :project, foreign_key: true
      t.belongs_to :update, foreign_key: true

      t.timestamps
    end
  end
end
