class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :comment_type
  belongs_to :project_update, class_name: "Update"
  belongs_to :project

  has_many :votes
  
=begin
validations
=end
#validates :subject_id

  def info
  	{
  		:id => self.id,
  		:content => self.content,
  		:votes => self.votes,
  		:user => self.user,
  		:subject_id => self.subject_id,
  		:c_type => self.c_type,

  	}
  end

  def vote_amount
  	self.votes.size
  end

end
