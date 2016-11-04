require 'rails_helper'

describe Brewery do 
    before do 
        Brewery.destroy_all
        State.destroy_all
        @state = FactoryGirl.create(:state)
        @brewery = FactoryGirl.create(:brewery)
    end

    it "has a valid factory" do 
        expect(@brewery).to be_valid
    end
    it "is a valid brewery" do 
        expect(@brewery).to be_an_instance_of(Brewery)
    end
    it "has a name" do 
        expect(@brewery.name).to eq("Orpheus Brewing Co")
    end
    it "has an address" do 
        expect(@brewery.address).to eq("12345 Beer Lane")
    end
    it "has a url" do 
        expect(@brewery.url).to eq("www.example.com")
    end
    it "has a lat" do 
        expect(@brewery.lat).to eq("34.5")
    end
    it "has a lng" do 
        expect(@brewery.lng).to eq("54.3")
    end
    it "properly uses #set_state_name" do 
        @brewery.state = @state
        @brewery.set_state_name(@brewery.state_id)
        expect(@brewery.state_name).to eq("Georgia")
    end
end