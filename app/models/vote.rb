class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :vote_type
  belongs_to :comment
  belongs_to :project
  belongs_to :project_update, class_name: "Update"
end
