class User < ApplicationRecord
    has_many :user_servers, dependent: :destroy
    has_many :servers, through: :user_servers
    has_many :messages
    has_many :channels, through: :messages

    has_secure_password
    validates :email, :password_digest, presence: true
    validates :username, presence: true, uniqueness: true

end
