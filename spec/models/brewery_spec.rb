require 'rails_helper'

describe Brewery do 
    before do 
        Brewery.destroy_all
        State.destroy_all
        @state = State.create(
          name: "Georgia",
          abbreviation: "GA"
          )
        @brewery = Brewery.create(
          name: "Orpheus Brewing Co",
          state_id: @state.id,
          address: "12345 Beer Lane",
          url: "www.example.com",
          lat: "34.5",
          lng: "54.3"
          )
    end

    it "is a valid brewery" do 
        expect(@brewery).to be_valid
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
        @brewery.set_state_name(@brewery.state_id)
        expect(@brewery.state_name).to eq("Georgia")
    end
end