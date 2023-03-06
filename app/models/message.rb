class Message < ApplicationRecord
    belongs_to :user
    belongs_to :channel

    validates :content, :user_id, :channel_id, presence: true
end
