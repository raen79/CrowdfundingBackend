class User < ApplicationRecord
  has_many :votes
  has_many :projects
  has_many :project_updates, class_name: "Update"
  has_many :transactions
  has_many :comments

  ### Before Filters
  ## Encrypt password before saving them
  # Random string solution from stackoverflow => http://stackoverflow.com/questions/88311/how-best-to-generate-a-random-string-in-ruby
  # Salt is 256 bits long as per recommendation of => Practical Cryptography (Ferguson, Schneier)
  after_validation do
    self.salt = rand(36**64).to_s(36)
    self.password = BCrypt::Password.create(self.password + salt)
    self.f_name = self.f_name.titleize
    self.l_name = self.l_name.titleize
  end

  ### Validations
  # Verify that password is present and is at least 8 characters long
  validates :password, :presence => {:message => "notpresent"}, :length => {:minimum => 8,  :message => "length"}
  # Verify that email is present and does not exist in the db yet
  validates :email, :presence => {:message => "notpresent"}, :uniqueness => {:message => "exists"}
  # Verfiy that email is in the format of an email
  validates_format_of :email, :with => /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i, :message => "format"
  # Verify that first and last name have only chars
  validates_format_of :l_name, :with => /\A[a-zA-z]+([ '-][a-zA-Z]+)*\z/i, :message => "format", :allow_nil => true
  validates_format_of :f_name, :with => /\A[a-zA-z]+([ '-][a-zA-Z]+)*\z/i, :message => "format", :allow_nil => true

  # Handle deleted users when deleted field is true
  acts_as_paranoid :column => 'deleted', :column_type => 'boolean'

end