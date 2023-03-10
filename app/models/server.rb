class Server < ApplicationRecord
    has_many :user_servers, dependent: :destroy
    has_many :users, through: :user_servers
    has_many :channels, dependent: :destroy
    has_many :messages, through: :channels

    validates :name, presence: true
end
