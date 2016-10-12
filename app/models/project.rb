class Project < ApplicationRecord
  belongs_to :user

  has_many :votes
  has_many :comments
  has_many :transactions
  has_many :updates
end
