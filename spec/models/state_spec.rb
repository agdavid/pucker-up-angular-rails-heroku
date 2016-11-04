require 'rails_helper'

describe State do
  before do 
    State.destroy_all
    @state = FactoryGirl.build(:state)
  end


  it "has a valid factory" do 
      expect(@state).to be_valid
  end
  it "is a valid state" do 
      expect(@state).to be_an_instance_of(State)
  end
  it "has a name" do
      expect(@state.name).to eq("Georgia") 
  end
  it "has an abbreviation" do
      expect(@state.abbreviation).to eq("GA") 
  end 
end