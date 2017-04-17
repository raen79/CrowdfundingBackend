class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :vote_type
  belongs_to :comment
  belongs_to :project
  belongs_to :project_update, class_name: "Update"

  validates :value, :inclusion => { :in => [-1, 1], :message => "notincluded" }
  validates :user, :uniqueness => { :scope => [:project_id, :update_id, :comment_id], :message => "exists" }
end
