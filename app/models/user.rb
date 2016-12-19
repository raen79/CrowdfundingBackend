class User < ApplicationRecord
  has_many :votes
  has_many :projects
  has_many :updates
  has_many :transactions
  has_many :comments

  ### Before Filters
  ## Encrypt password before saving them
  # Random string solution from stackoverflow => http://stackoverflow.com/questions/88311/how-best-to-generate-a-random-string-in-ruby
  # Salt is 256 bits long as per recommendation of => Practical Cryptography (Ferguson, Schneier)
  before_save(self) do
    self.salt = rand(36**64).to_s(36)
    self.password = BCrypt::Password.create(self.password + salt)
  end

  ### Validations
  # Verify that password is present and is at least 8 characters long
  validates :password, :presence => {:message => "notpresent"}, :length => {:minimum => 8,  :message => "length"}
  # Verify that email is present and does not exist in the db yet
  validates :email, :presence => {:message => "notpresent"}, :uniqueness => {:message => "exists"}
  # Verfiy that email is in the format of an email
  validates_format_of :email, :with => /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i, :message => "format"

  # Handle deleted users when deleted field is true
  acts_as_paranoid :column => 'deleted', :column_type => 'boolean'

end