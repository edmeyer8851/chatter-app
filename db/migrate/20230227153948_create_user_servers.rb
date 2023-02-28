class CreateUserServers < ActiveRecord::Migration[7.0]
  def change
    create_table :user_servers do |t|
      t.integer :user_id
      t.integer :server_id
      t.timestamps
    end
  end
end
