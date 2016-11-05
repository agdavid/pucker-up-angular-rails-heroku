class BreweriesController < ApplicationController
  # Devise check for user authentication
  before_filter :authenticate_user!, only: [:create, :update, :destroy]

  def index
    # get /breweries will go to breweries#index and return all breweries
    @breweries = Brewery.all
    render json: @breweries 
  end

  def create
    # post /breweries will go to breweries#create and instantiate a brewery
    brewery = Brewery.new(brewery_params)  
    if brewery.save
      brewery.state_name = brewery.set_state_name(brewery.state_id)
      render json: brewery
    else
      render json: { errors: brewery.errors.full_messages }, status: :unprocessable_entity 
    end
  end

  def show
    # get /breweries/:id will go to breweries#show and return a brewery
    @brewery = Brewery.find(params[:id])
    render json: @brewery
  end

  def update
    # patch /breweries/:id will go to breweries#update and edit a brewery
    @brewery = Brewery.find(params[:id])
    # Pundit authorization checking user.admin == true
    authorize @brewery 
    if @brewery.update(brewery_params)
      render json: @brewery 
    else
      render json: { errors: @brewery.errors.full_messages }, status: :unprocessable_entity 
    end
  end

  def destroy
    # post with method of delete /breweries/:id will go to breweries#destroy and delete a brewery
    brewery = Brewery.find(params[:id])
    # Pundit authorization checking user.admin == true
    authorize brewery
    brewery.destroy
  end

  private
    def brewery_params
      params.require(:brewery).permit(:name, :state_id, :state_name, :address, :url, :lat, :lng)
    end

end