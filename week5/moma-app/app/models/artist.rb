class Artist < ApplicationRecord
  has_many :works


  validates :name, presence: true, length: { minimum: 3}

end
