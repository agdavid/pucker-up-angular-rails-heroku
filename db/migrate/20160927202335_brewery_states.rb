class BreweryStates < ActiveRecord::Migration[5.0]
  def change
    create_table :brewery_states do |t|
      t.integer :brewery_id
      t.integer :state_id
    end
  end
end
