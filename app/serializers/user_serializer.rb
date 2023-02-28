class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :servers, through: :user_servers
end
