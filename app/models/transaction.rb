class Transaction < ApplicationRecord
  belongs_to :user
  belongs_to :project
  belongs_to :parent, :class_name => "Transaction"
  has_one :refund, :class_name => "Transaction"
end
