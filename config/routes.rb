Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope 'api' do
    scope 'authentication' do
      post '/', :to => 'authentication#login'
      put '/', :to => 'authentication#register'
      patch '/', :to => 'authentication#modify_user'
    end
  end
end
