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

    # Project controller routes
    scope 'project' do
      put '/', :to => 'project#add_project'
      patch '/', :to => 'project#modify_project'
      delete '', :to => 'project#delete_project'
      get '/:id', :to => 'project#view_project'
      get '/', :to => 'project#view_projects'
    end
    patch '/approve_project', :to => 'project#approve_project'

    # Update controller routes
    scope 'update' do
      put '/', :to => 'update#add_update'
      patch '/', :to => 'update#modify_update'
      delete '/', :to => 'update#delete_update'
      get '/:id', :to => 'update#view_update'
    end

    # Community controller routes
    scope 'comment' do
      put '/', :to => 'community#add_comment'
      delete '/', :to => 'community#delete_comment'
      get '/:id', :to => 'community#view_comment'
    end

    scope 'vote' do
      patch '/', :to => 'community#vote'
    end

    # Transaction controller routes
    scope 'transaction' do
      put '/', :to => 'transaction#new_transaction'
      get '/', :to => 'transaction#view_transactions'
    end
    put '/refund_transaction', :to => 'transaction#refund_transaction'
  end

  # Angular routes
  get "*unmatched_route" => "task#index"
end