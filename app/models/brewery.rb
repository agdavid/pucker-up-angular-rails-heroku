class Brewery < ApplicationRecord
    belongs_to :state, optional: true
    has_many :beers, dependent: :destroy

    def set_state_name(state_id)
        state = State.find(state_id)
        self.state_name = state.name
        self.save
    end
end