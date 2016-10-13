class User < ApplicationRecord
  has_many :votes
  has_many :projects
  has_many :updates
  has_many :transactions
  has_many :comments

  # Handle deleted users when deleted field is true
  acts_as_paranoid :column => 'deleted', :column_type => 'boolean'
end