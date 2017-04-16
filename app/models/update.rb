class Update < ApplicationRecord #Dom but mainly Eran
  belongs_to :user
  belongs_to :project

  has_many :votes, :dependent => :destroy
  has_many :comments, :dependent => :destroy

  after_validation do
    self.name = self.name.titleize
  end

	### Validations
	# Verify that name is present and greater than 3 chars
	validates :name, :presence => {:message => "notpresent"}, :length => {:minimum => 3, :message => "length"}
	# Verify the description is present and smaller than 300 chars
	validates :description, :presence => {:message => "notpresent"}
	validate :description_length
	# Verify that associations with user and project exist
	validates :user, :presence => {:message => "notpresent"}
	validates :project, :presence => {:message => "notpresent"}

  def description_length
    # If description is smaller than 300 chars without tags
    full_sanitizer = Rails::Html::FullSanitizer.new
    description_without_tags = full_sanitizer.sanitize(self.description)
    if description_without_tags.length < 300 # do we really want to make it this long? [[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]
      errors.add(:description, :message => "length")
    end
  end

  # def approved?
  #   if self.approved == true
  #     true
  #   else
  #     false
  #   end
  # end

  def info
    {
      :id => self.id,
      :name => self.name,
      :description => self.description,
      :created_at => self.created_at
    }
  end

  # Handle deleted users when deleted field is true
  acts_as_paranoid :column => 'deleted', :column_type => 'boolean'

end
