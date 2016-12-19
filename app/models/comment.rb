class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :comment_type
  belongs_to :project_update, class_name: "Update"
  belongs_to :project

  has_many :votes
end
