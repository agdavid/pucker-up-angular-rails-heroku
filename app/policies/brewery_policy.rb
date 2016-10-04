class BreweryPolicy < ApplicationPolicy
    def update?
        # User may update brewery only if user.admin == true
        user.admin?
    end

    def destroy?
        # User may destroy brewery only if user.admin == true
        user.admin?
    end
end