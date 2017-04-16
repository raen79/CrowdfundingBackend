class Project < ApplicationRecord

  belongs_to :user

  has_many :votes, :dependent => :destroy
  has_many :comments, :dependent => :destroy
  has_many :transactions, :dependent => :destroy
  has_many :project_updates, class_name: "Update", :dependent => :destroy

  ### Validations
  # Validate that name is present and greater than 3 chars
  validates :name, :presence => {:message => "notpresent"}, :length => {:minimum => 3, :message => "length"}, :uniqueness => {:message => "exists"}
  # Validate that description exists and is smaller than 300 chars without tags
  validates :description, :presence => {:message => "notpresent"}
  validate :description_length
  # Validate that funding goal is present and greater than 2 chars
  validates :funding_goal, :presence => {:message => "notpresent"}, :length => {:minimum => 2, :message => "length"}
  # Verify that associations with user exists
  validates :user, :presence => {:message => "notpresent"}

  ## Custom Validations
  def description_length
    # If description is smaller than 300 chars without tags
    full_sanitizer = Rails::Html::FullSanitizer.new
    description_without_tags = full_sanitizer.sanitize(self.description)
    if description_without_tags.length < 300
      errors.add(:description, "length")
    end
  end

  ### Class methods
  ## Transactions
  def relevant_transactions
    self.transactions
    #.where(:transaction => {:id => nil})
  end

  def relevant_backers
    self.relevant_transactions.select(:user => :id).distinct
  end

  def sum_donations
    relevant_transactions = self.relevant_transactions
    if relevant_transactions.size > 0
      self.relevant_transactions.sum(:amount)
    else
      0
    end
  end

  def backers_amount
    self.relevant_backers.size
  end

  def sum_votes
    relevant_votes = self.votes
    if relevant_votes.size > 0
      relevant_votes.where(:value => 1).size + (relevant_votes.where(:value => 0).size * -1)
    else
      0
    end
  end

  ## Project approval
  def approve
    self.approved = true
    self.save!
  end

  def reject
    self.approved = false
    self.save!
  end

  ## Verify project status
  def approved?
    if self.approved == true
      true
    else
      false
    end
  end

  def rejected?
    if self.approved == false
      true
    else
      false
    end
  end

  def pending?
    if self.approved.nil?
      true
    else
      false
    end
  end

  ## Objects for response
  # Updates object
  def updates_info
    updates = []

    self.project_updates.each do |update|
      updates.push({
          :id => update.id,
          :name => update.name,
          :description => update.description[0..200].gsub(/\s\w+\s*$/, '...'),
          :created_at => update.created_at
        })
    end

    return updates
  end

  # Comments object
  def comments_info
    project_comments = []

    self.comments.each do |comment|
      project_comments.push({
          :id => comment.id,
          :content => comment.content,
          :votes => comment.sum_votes,
          :user => comment.creator,
          :created_at => comment.created_at
        })
    end
    
    return project_comments
  end

  # Detailed project object
  def detailed_info
    {
      :id => self.id,
      :name => self.name,
      :description => self.description,
      :funding_goal => self.funding_goal,
      :video => self.video,
      :image => self.image,
      :current_funding => self.sum_donations,
      :backers => self.backers_amount,
      :user => self.user.summary,
      :updates => self.updates_info,
      :comments => self.comments_info,
      :votes => self.sum_votes,
      :created_at => self.created_at,
      :updated_at => self.updated_at
    }
  end

  # Summary project object
  def summary
    {
      :id => self.id,
      :name => self.name,
      :description => self.description,
      :image => self.image,
      :funding_goal => self.funding_goal,
      :user => self.user.summary,
      :votes => self.sum_votes,
      :current_funding => self.sum_donations,
      :updated_at => self.updated_at
    }
  end

  ### Handle deleted users when deleted field is true
  acts_as_paranoid :column => 'deleted', :column_type => 'boolean'

  ### Scopes
  # Project.approved will return all approved projects
  scope :approved, -> { where(:approved => true) }
  # Project.pending will return all projects that have not been approved or rejected yet
  scope :pending, -> { where(:approved => nil) }
  # Project.rejected will return all projects that have been rejected
  scope :rejected, -> { where(:approved => false) }

end