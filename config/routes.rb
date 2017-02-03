Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope 'api' do
    # Authentication controller routes
    scope 'authentication' do
      post '/', :to => 'authentication#login'
      put '/', :to => 'authentication#register'
      patch '/', :to => 'authentication#modify_user'
      delete '/', :to => 'authentication#delete_user'
      get '/:id', :to => 'authentication#view_user'
      get '/', :to => 'authentication#view_users'
    end

    #Project controller routes
    scope 'project' do
      put '/', :to => 'project#add_project'
      patch '/', :to => 'project#modify_project'
    end

    #Update controller routes
    scope 'update' do
      put '/', :to => 'update#add_update'
    end
  end
end
