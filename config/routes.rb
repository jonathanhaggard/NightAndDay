Rails.application.routes.draw do
  root 'colors#index'

  resources :colors, only: [:index, :create, :update]
end
