require 'rails_helper'

describe BreweriesController do 
  before do 
      State.destroy_all
      @state = create(:state)
      Brewery.destroy_all
      @orpheus = create(:brewery, name: "Orpheus Brewing Co", state_id: @state.id)
      @sweetwater = create(:brewery, name: "Sweetwater Brewing Co", state_id: @state.id)
  end
        
  describe 'GET #index' do 
      it "assigns an array of all breweries to @breweries" do 
          get :index
          expect(assigns(:breweries).count).to eq(2)
          expect(assigns(:breweries)).to match_array([@orpheus, @sweetwater])
      end
      it "returns all breweries as JSON" do 
          get :index
          expect(response).to have_http_status(:success)
          json = JSON.parse(response.body)
          expect(json.size).to eq(2)
          expect(json.first['name']).to eq("Orpheus Brewing Co")
          expect(json.last['name']).to eq("Sweetwater Brewing Co")
      end
  end
  
  describe 'GET #show' do 
      it "assigns the requested brewery to @brewery" do 
          get :show, id: @orpheus
          expect(assigns(:brewery)).to eq(@orpheus)
      end
      it "returns a state request as JSON" do 
          get :show, id: @orpheus
          expect(response).to have_http_status(:success)
          json = JSON.parse(response.body)
          expect(json['name']).to eq("Orpheus Brewing Co")
          expect(json['state_id']).to eq(@state.id)
      end
  end

  describe 'POST #create' do 
      context "user not logged in" do 
          it "does not have a current_user" do 
              expect(subject.current_user).to eq(nil)
          end
          it "does not save the new brewery in the database" do 
              expect {
                post :create, brewery: attributes_for(:brewery)
              }.to change(Brewery, :count).by(0)
          end
      end
      context "user is logged in" do
          login_user
          it "has a current_user" do 
              expect(subject.current_user).not_to eq(nil)
          end 
          it "saves the new brewery in the database" do 
              expect {
                post :create, brewery: attributes_for(:brewery, state_id: @state.id)
              }.to change(Brewery, :count).by(1)
          end
      end
  end

  describe 'PATCH #update' do 
      context "admin is logged in" do 
          login_admin
          it "has a current_user" do 
              expect(subject.current_user).to_not eq(nil)
          end
          it "locates the requested @brewery" do 
              patch :update, id: @orpheus, brewery: attributes_for(:brewery)
              expect(assigns(:brewery)).to eq(@orpheus)
          end
          it "changes @brewery's attributes" do 
              patch :update, id: @orpheus,
                brewery: attributes_for(:brewery,
                  name: "Orpheus")
              @orpheus.reload
              expect(@orpheus.name).to eq("Orpheus")
              expect(@orpheus.name).not_to eq("Orpheus Brewing Co")
          end
      end
  end


  

end