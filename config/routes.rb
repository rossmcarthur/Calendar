Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :events
  end
  
  root "static_pages#root"
end
