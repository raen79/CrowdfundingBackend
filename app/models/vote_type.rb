class VoteType < ApplicationRecord
  has_many :votes, :dependent => :delete_all
end
