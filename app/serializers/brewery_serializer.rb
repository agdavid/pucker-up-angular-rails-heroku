class BrewerySerializer < ActiveModel::Serializer
  attributes :id, :name, :state_id, :state_name, :address, :url, :lat, :lng
  has_one :state
end
