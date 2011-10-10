class Department < ActiveRecord::Base
  has_many :positions

  validates :name, :presence => true
end
