class BrewerySerializer < ActiveModel::Serializer
  attributes :id, :name, :state_id, :state_name
  has_one :state
end
