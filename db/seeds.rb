puts "Seeding data..."

user1 = User.create(username: "eddie", password: 'test', password_confirmation: 'test', email: 'bobbytables@gmail.com')

user2 = User.create(username: "owen", password: 'test', password_confirmation: 'test', email: 'busjr@gmail.com')

server = Server.create(name: "Chatzone")

general = Channel.create(name: 'general', server_id: server.id)
testChannel = Channel.create(name: 'testChannel', server_id: server.id)


UserServer.create(user_id: user1.id, server_id: server.id)
UserServer.create(user_id: user2.id, server_id: server.id)

puts 'Done seeding!'