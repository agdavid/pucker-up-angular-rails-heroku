require 'rails_helper'

describe State do
  before(:each) do 
    State.destroy_all
    @state = State.create(
      name: "Arizona",
      abbreviation: "AZ"
      )
  end
  it "is a valid state" do 
      expect(@state).to be_valid
  end
  it "has a name" do
      expect(@state.name).to eq("Arizona") 
  end
  it "has an abbreviation" do
      expect(@state.abbreviation).to eq("AZ") 
  end 
end