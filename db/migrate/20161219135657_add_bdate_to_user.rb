class AddBdateToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :birth_date, :date
  end
end
