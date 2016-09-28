class Brewery < ApplicationRecord
  belongs_to :state, optional: true
  has_many :beers, dependent: :destroy
end