class Project < ApplicationRecord

  belongs_to :user

  has_many :votes
  has_many :comments
  has_many :transactions
  has_many :project_updates, class_name: "Update"

  ### Validations
  # Validate that name is present and greater than 3 chars
  validates :name, :presence => {:message => "notpresent"}, :length => {:minimum => 3, :message => "length"}, :uniqueness => {:message => "exists"}
  # Validate that description exists and is smaller than 300 chars without tags
  validates :description, :presence => {:message => "notpresent"}
  validate :description_length
  # Validate that funding goal is present and greater than 2 chars
  validates :funding_goal, :presence => {:message => "notpresent"}, :length => {:minimum => 2, :message => "length"}
  ## Custom Validations
  def description_length
    # If description is smaller than 300 chars without tags
    full_sanitizer = Rails::Html::FullSanitizer.new
    description_without_tags = full_sanitizer.sanitize(self.description)
    if description_without_tags.length < 300
      errors.add(:description, :message => "length")
    end
  end

  ### Scopes
  # Project.approved will return all approved projects
  scope :approved, -> { where(:approved => true) }
  # Project.pending will return all projects that have not been approved or rejected yet
  scope :pending, -> { where(:approved => nil) }
  # Project.rejected will return all projects that have been rejected
  scope :rejected, -> { where(:approved => false) }

end
