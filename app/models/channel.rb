class Channel < ApplicationRecord
    has_many :messages, dependent: :destroy
    has_many :users, through: :messages
    belongs_to :server

    validates :name, :server_id, presence: true
end
