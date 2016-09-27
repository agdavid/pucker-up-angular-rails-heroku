class CreateBeerStates < ActiveRecord::Migration[5.0]
  def change
    create_table :beer_states do |t|
      t.integer :beer_id
      t.integer :state_id

      t.timestamps null: false
    end
  end
end
