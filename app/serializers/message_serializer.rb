class MessageSerializer < ActiveModel::Serializer
  attributes :id, :channel_id, :content, :created_at
  belongs_to :user
end
