class StatesController < ApplicationController

  def index
    # get /states will go to states#index and return all states
    states = State.all
    render json: states 
  end

  def show
    # get /states/:slug will go to states#show and return a state
    state = State.find(params[:id])
    render json: state
  end

end