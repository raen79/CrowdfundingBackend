Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  post '/api/login', :to => 'authentication#login'
  post '/api/register', :to => 'authentication#register'
end
