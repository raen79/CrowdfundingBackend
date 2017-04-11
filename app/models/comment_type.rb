class CommentType < ApplicationRecord
  has_many :comments, :dependent => :destroy
end
