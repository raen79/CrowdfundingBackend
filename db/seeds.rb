# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

## Create User
# Random string solution from stackoverflow => http://stackoverflow.com/questions/88311/how-best-to-generate-a-random-string-in-ruby
# Salt is 256 bits long as per recommendation of => Practical Cryptography (Ferguson, Schneier)
salt = rand(36**64).to_s(36)
password = BCrypt::Password.create("eran.peer79" + salt)
user = User.create(:email => "eran.peer79@gmail.com", :f_name => "Eran", :l_name => "Peer", :password => password, :salt => salt)

vote_type = VoteType.create([{:name => "PROJECT"}, {:name => "UPDATE"}, {:name => "COMMENT"}])

comment_type = CommentType.create([{:name => "PROJECT"}, {:name => "UPDATE"}])