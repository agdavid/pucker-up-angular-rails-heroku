FactoryGirl.define do 
    factory :user do 
        email { Faker::Internet.email }
        password "password"
        password_confirmation "password"


        factory :admin do 
            admin true
        end
    end
end