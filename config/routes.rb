Rails.application.routes.draw do
  
  resources :user_servers, only: [:index, :show, :create, :destroy]
  # resources :messages, only: [:index, :show, :create, :update, :destroy]
  resources :channels, only: [:show, :create, :update, :destroy]
  resources :servers, only: [:show, :create, :update, :destroy]
  # resources :users, only: [:index, :show, :create, :update, :destroy]

  resources :users do
    resources :servers
  end

  resources :servers do
    resources :channels
  end

  post '/login', to: 'sessions#create'
  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'
  delete 'logout', to: 'sessions#destroy'

end
