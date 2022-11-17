import {React, useState, useEffect} from 'react'
import axios from 'axios'

const Hotels = () => {
  const [hotels, setHotels] = useState([])

  useEffect (()=> {
      //get all hotels from the api
      //update all hotels in state
    axios.get('api/v1/hotels.json')
    .then( resp => console.log(resp))
    .catch( resp => console.log(resp))
  }, [hotels.length])
  return (
    <div>
      This is the hotels*index view for our app
    </div>
  )
}

export default Hotels