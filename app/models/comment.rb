class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :comment_type
  belongs_to :update
  belongs_to :project

  has_many :votes
end
