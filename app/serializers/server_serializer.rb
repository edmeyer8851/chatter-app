class ServerSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :channels
end
