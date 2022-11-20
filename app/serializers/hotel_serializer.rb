class HotelSerializer
  include JSONAPI::Serializer
  attributes :name, :slug, :image_url, :avg_score
  has_many :reviews
end
