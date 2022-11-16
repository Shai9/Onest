class ReviewSerializer
  include JSONAPI::Serializer
  attributes :title, :description, :score, :hotel_id
end
