class Transaction < ApplicationRecord
  belongs_to :user
  belongs_to :project
  belongs_to :refund, :class_name => "Transaction", :foreign_key => 'transaction_id'
  has_one :parent, :class_name => "Transaction", :dependent => :destroy

  ### Validations
  validates :amount, :presence => {:message => "notpresent"}
  #validates_numericality_of :amount, :greater_than => 0, :message => ""
  validates :project, :presence => {:message => "notpresent"}
  validates :user, :presence => {:message => "notpresent"}

  # Handle deleted transactions when deleted field is true
  acts_as_paranoid :column => 'deleted', :column_type => 'boolean'

  ## Objects for response
  # Transaction Info Object
  def info
    @info = {
      :id => self.id,
      :date => self.created_at,
      :amount => self.amount,
      :project_id => self.project.id,
      :user_id => self.user.id
    }

    if !self.refund.blank?
      @info[:refund] = {
        :id => self.refund.id,
        :date => self.refund.created_at,
        :amount => self.refund.amount
      }
    end

    return @info
  end

  ## Return transactions without parents (that are not refunds)
  def self.not_refund
    self.where(:id => self.all.pluck(:id) - self.joins(:parent).pluck(:id))
  end
end