class Update < ApplicationRecord
  belongs_to :user
  belongs_to :project

  has_many :votes
  has_many :comments
end
