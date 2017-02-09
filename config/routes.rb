Rails.application.routes.draw do
  resources :properties
  root 'application#index'

  post 'pages/contact'

  get '*path' => 'application#index'

  # get '/about' => 'pages#about'
  # resources :categories do 
  #   resources :subcategories
  # end
end
