class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :comment_type
  belongs_to :project_update, class_name: "Update"
  belongs_to :project

  has_many :votes, :dependent => :destroy
  
=begin
validations
=end
#validates :subject_id

  def info
  	{
  		:id => self.id,
  		:content => self.content,
  		:votes => self.sum_votes,
  		:user => self.user,
  		:subject_id => self.subject_id,
  		:c_type => self.c_type,

  	}
  end

  def sum_votes
    relevant_votes = self.votes
    if relevant_votes.size > 0
      relevant_votes.sum(:value)
    else
      0
    end
  end

  def creator
    self.user.summary
  end

end
