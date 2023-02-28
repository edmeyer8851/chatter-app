Rails.application.routes.draw do
  
  resources :user_servers, only: [:index, :show, :create, :destroy]
  resources :messages, only: [:index, :show, :create, :update, :destroy]
  resources :channels, only: [:index, :show, :create, :update, :destroy]
  resources :servers, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create, :update, :destroy]

  post '/login', to: 'sessions#create'
  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'
  delete 'logout', to: 'sessions#destroy'
  get '/servers_by_user', to: 'servers#get_servers_by_user'

end
