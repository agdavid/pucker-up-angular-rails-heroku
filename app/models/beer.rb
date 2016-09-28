class Beer < ApplicationRecord
  belongs_to :brewery, optional: true
end
