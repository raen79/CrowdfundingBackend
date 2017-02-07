class Transaction < ApplicationRecord
  belongs_to :user
  belongs_to :project
  belongs_to :parent, :class_name => "Transaction"
  has_one :refund, :class_name => "Transaction"
  
  ### Validations
  validates :amount, :presence => {:message => "notpresent"}
  validates_numericality_of :amount, :greater_than => 0, :message => ""
  validates :project, :presence => {:message => "notpresent"}
  validates :user, :presence => {:message => "notpresent"}

  # Handle deleted transactions when deleted field is true
  acts_as_paranoid :column => 'deleted', :column_type => 'boolean'

end
