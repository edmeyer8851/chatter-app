class UserServer < ApplicationRecord
    belongs_to :user
    belongs_to :server

    validates :user_id, :server_id, presence: true
end
