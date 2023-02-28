class UserServerSerializer < ActiveModel::Serializer
  attributes :id, :user_id
  belongs_to :server
end
