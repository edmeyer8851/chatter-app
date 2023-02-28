class Server < ApplicationRecord
    has_many :user_servers
    has_many :channels
    has_many :messages, through: :channels

    validates :name, presence: true
end
