Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope 'api' do
    scope 'authentication' do
      post '/login', :to => 'authentication#login'
      put '/register', :to => 'authentication#register'
    end
  end
end
