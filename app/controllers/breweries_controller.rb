class BreweriesController < ApplicationController

  def index
    # get /breweries will go to breweries#index and return all breweries
  end

  def create
    # post /breweries will go to breweries#create and instantiate a brewery
  end

  def show
    # get /breweries/:id will go to breweries#show and return a brewery
  end

  def update
    # patch /breweries/:id will go to breweries#update and edit a brewery
  end

  def delete
    # post with method of delete /breweries/:id will go to breweries#destroy and delete a brewery
  end

end