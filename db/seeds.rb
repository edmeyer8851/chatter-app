puts "Seeding data..."

user1 = User.create(username: "gerb jr", password: 'test', password_confirmation: 'test', email: 'bobbytables@gmail.com')

user2 = User.create(username: "bus jr", password: 'test', password_confirmation: 'test', email: 'busjr@gmail.com')

server = Server.create(name: "Lepzone")

general = Channel.create(name: 'general', server_id: server.id)

UserServer.create(user_id: user1.id, server_id: server.id)
UserServer.create(user_id: user2.id, server_id: server.id)

puts 'Done seeding!'