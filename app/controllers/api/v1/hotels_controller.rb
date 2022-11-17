module Api
  module V1
    class HotelsController < ApplicationController
      

      def index
        hotels = Hotel.all

        render json: HotelSerializer.new(hotels, options).serializable_hash
      end

      def show
        hotel = Hotel.find_by(slug: params[:slug])

        render json: HotelSerializer.new(hotel, options).serializable_hash
      end

      def create
        hotel = Hotel.new(hotel_params)

        if hotel.save
          render json: HotelSerializer.new(hotel).serializable_hash
        else
          render json: { error: hotel.errors.messages }, status: 422
        end
      end

      def update
        hotel = Hotel.find_by(slug: params[:slug])

        if hotel.update(hotel_params)
          render json: HotelSerializer.new(hotel, options).serializable_hash
        else
          render json: { error: hotel.errors.messages }, status: 422
        end
      end

      def destroy
        hotel = Hotel.find_by(slug: params[:slug])

        if hotel.destroy
          head :no_content
        else
          render json: { errors: hotel.errors.messages }, status: 422
        end
      end

      private

      def hotel_params
        params.permit(:name, :image_url)
      end

      def options
        @options ||= { include: %i[reviews] }
      end
    end
  end
end