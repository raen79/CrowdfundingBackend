# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

## Create User
user = User.create(:email => "eran.peer79@gmail.com", :f_name => "Eran", :l_name => "Peer", :password => "eran.peer79")

## Create Vote Types
vote_type = VoteType.create([{:name => "PROJECT"}, {:name => "UPDATE"}, {:name => "COMMENT"}])

## Create Comment Types
comment_type = CommentType.create([{:name => "PROJECT"}, {:name => "UPDATE"}])