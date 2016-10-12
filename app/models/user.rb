class User < ApplicationRecord
  has_many :votes
  has_many :projects
  has_many :updates
  has_many :transactions
  has_many :comments
end