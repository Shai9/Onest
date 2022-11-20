import {React, useState, useEffect} from 'react'
import axios from 'axios'
import Hotel from './Hotel'

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

  const grid = hotels.map(item => {
    return (
    <Hotel
        key={item.attributes.name}
        attributes={item.attributes}
    />
    )
  })
  return (
    <div className='text-center mr-auto ml-auto max-w-sm md:max-w-lg'>
      <div className='p-6'>
        <h1 className='text-base'>ONEST</h1>
        <div className='font-semibold text-base'>Honest Hotel Reviews</div>
      </div>
      <div className='grid gap-5 grid-cols-4 p-5'>
        <ul>{grid}</ul>
      </div>
    </div>
  )
}

export default Hotels