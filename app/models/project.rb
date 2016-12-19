class Project < ApplicationRecord
  belongs_to :user

  has_many :votes
  has_many :comments
  has_many :transactions
  has_many :project_updates, class_name: "Update"
end
