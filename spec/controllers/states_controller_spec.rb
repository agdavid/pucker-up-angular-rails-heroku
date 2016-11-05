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
      it "populates an array of all states"
      it "returns JSON"
  end
  
  describe 'GET #show' do 
      it "assigns the requested state to @state" do 
          get :show, id: @georgia
          expect(assigns(:state)).to eq(@georgia)
      end
      it "returns JSON"
  end

end