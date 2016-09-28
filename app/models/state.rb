class State < ApplicationRecord
  has_many :breweries, dependent: :destroy
end
