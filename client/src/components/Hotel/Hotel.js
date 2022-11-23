import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Header'

const Hotel = (props) => {

    const [hotel, setHotel] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
      const slug = props.match.params.slug
      const url = `api/v1/hotels/${slug}`
      // api/v1/hotels/ole-sereni
      // hotels/ole-sereni
      axios.get(url)
      .then( resp => { 
        setHotel(resp.data)
        setLoaded(true)
        })
      .catch(resp = console.log(resp))
    },[])
    return(
      <div className='wrapper'>
        <div className='columns'>
          {
            loaded &&
            <Header 
              attributes = {hotel.data.attributes}
              reviews = {hotel.included}
            />
          }
          <div className='reviews'></div>
        </div>
        <div className='columns'>
          <div className='review-form'>Review Goes Here</div>
        </div>
      </div>
    )
} 
export default Hotel