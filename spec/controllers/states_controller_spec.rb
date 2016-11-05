require 'rails_helper'

describe StatesController do 
  before do 
      State.destroy_all
      @georgia = create(:state,
        name: "Georgia",
        abbreviation: "GA"
        )
      @oregon = create(:state,
        name: "Oregon",
        abbreviation: "OR"
        )
  end
  
  describe 'GET #index' do 
      it "assigns an array of all states to @states" do 
          get :index
          expect(assigns(:states).count).to eq(2)
          expect(assigns(:states)).to match_array([@georgia, @oregon])
      end
      it "returns all states as JSON" #TO DO
  end
  
  describe 'GET #show' do 
      it "assigns the requested state to @state" do 
          get :show, id: @georgia
          expect(assigns(:state)).to eq(@georgia)
      end
      it "returns a state as JSON" do 
          get :show, id: @georgia
          expect(response).to have_http_status(:success)
          json = JSON.parse(response.body)
          expect(json['name']).to eq("Georgia")
          expect(json['abbreviation']).to eq("GA")
      end
  end

end