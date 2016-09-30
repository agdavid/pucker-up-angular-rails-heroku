class AddStateNameToBreweries < ActiveRecord::Migration[5.0]
  def change
    add_column :breweries, :state_name, :string
  end
end
