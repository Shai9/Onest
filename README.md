# ONEST

A Hotel reviews app built with Ruby on Rails and React.js
This app is intended to be a simple example of a CRUD app built with Ruby on Rails and React.js.

## TECHNOLOGIES USED

This app uses:

- Ruby version: 2.7
- Rails version: 7.0.3.4
- Database: postgresql
- React version: 17.12.0
- React Hooks API
- React Context API
- Insomnia(same as POSTMAN)
- Tailwind css
- Styled components


## Routes
````
             Prefix Verb   URI Pattern                           Controller#Action
               root GET    /                                     pages#index
    api_v1_hotels GET    /api/v1/hotels(.:format)            api/v1/hotels#index
                    POST   /api/v1/hotels(.:format)            api/v1/hotels#create
 new_api_v1_hotel GET    /api/v1/hotels/new(.:format)        api/v1/hotels#new
edit_api_v1_hotel GET    /api/v1/hotels/:slug/edit(.:format) api/v1/hotles#edit
     api_v1_hotel GET    /api/v1/hotels/:slug(.:format)      api/v1/hotels#show
                    PATCH  /api/v1/hotels/:slug(.:format)      api/v1/hotels#update
                    PUT    /api/v1/hotels/:slug(.:format)      api/v1/hotels#update
                    DELETE /api/v1/hotels/:slug(.:format)      api/v1/hotels#destroy
     api_v1_reviews POST   /api/v1/reviews(.:format)             api/v1/reviews#create
      api_v1_review DELETE /api/v1/reviews/:id(.:format)         api/v1/reviews#destroy
                    GET    /*path(.:format)                      pages#index
                   
                    
                    
## Models
