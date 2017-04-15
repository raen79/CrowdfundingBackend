class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :vote_type
  belongs_to :comment
  belongs_to :project
  belongs_to :project_update, class_name: "Update"

  def sum_votes
    relevant_votes = self.votes
    if relevant_votes.size > 0
      relevant_votes.where(:value => 1).size + (relevant_votes.where(:value => 0).size * -1)
    else
      0
    end
  end
end
