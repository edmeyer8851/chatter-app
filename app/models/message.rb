class Message < ApplicationRecord
    after_create_commit { broadcast_message }
    
    belongs_to :user
    belongs_to :channel

    validates :content, :user_id, :channel_id, presence: true

    private

    def broadcast_message
        ActionCable.server.broadcast("MessagesChannel", {
            id: id,
            content: content,
            user: user,
            channel_id: channel_id,
            created_at: created_at,
        })
    end
end
