import {React, useState, useEffect} from 'react'
import axios from 'axios'

const Hotels = () => {
  const [hotels, setHotels] = useState([])

  useEffect (()=> {
      //get all hotels from the api
      //update all hotels in state
    axios.get('api/v1/hotels.json')
    .then( resp => {
      setHotels(resp.data.data)
    })
    .catch( resp => console.log(resp))
  }, [hotels.length])

  const list = hotels.map(item => {
    return (<li key={item.attributes.name}>{item.attributes.name}</li>)
  })
  return (
    <div className=''>
      <div className=''>
        <h1>ONEST</h1>
        <div className=''>Honest Hotel Reviews</div>
      </div>
      <div className=''>
        <ul>{list}</ul>
      </div>
    </div>
  )
}

export default Hotels