class AddFieldsToBreweries < ActiveRecord::Migration[5.0]
  def change
    add_column :breweries, :address, :string
    add_column :breweries, :url, :string
    add_column :breweries, :lat, :string
    add_column :breweries, :lng, :string
  end
end
