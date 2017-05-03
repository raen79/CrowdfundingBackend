FactoryGirl.define do
    factory :user do
      id 1
      email "admin@admin.com"
      password "administrator"
      f_name "Eran"
      l_name "Peer"
      admin true
    end

    factory :project do 
      id 1
      name "test project"
      description "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis condimentum elit. Nullam risus erat, suscipit nec lacinia at, ornare at turpis. Cras vulputate magna nisl, id porttitor est semper vestibulum. Suspendisse id sollicitudin ipsum. Donec elementum felis dolor, sed malesuada sed."
      funding_goal 500
      user
    end

    factory :transaction do
      id 1
      created_at "2017-03-12 12:40:20.206749"
      amount 500
      project
      user
    end
    
    factory :comment_type do
      id 1
      name "PROJECT"
    end

    factory :comment do
      id 1
      content "jeremy's comment"
      user
      comment_type
      project
    end

    factory :update do
      id 1
      name "Test Update 1"
      description "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec."
      created_at "2017-03-12 12:40:20.206749"
      updated_at "2017-03-12 12:40:20.206749"
      user
      project
    end


end