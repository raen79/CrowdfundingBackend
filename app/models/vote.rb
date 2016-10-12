class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :vote_type
  belongs_to :comment
  belongs_to :project
  belongs_to :update
end
