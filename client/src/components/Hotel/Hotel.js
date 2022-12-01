import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Hotel = (props) => {
 
    const [hotel, setHotel] = useState({})
    const [review, setReview] = useState({})

    useEffect(() => {
      const slug = props.match.params.slug
        axios.get(`/api/v1/hotels.json/${slug}`)
        .then(resp => console.log(resp))
        .catch(resp => console.log(resp))
    })

    return (
      <div>
        This is the single hotel section
      </div>
  )
}

export default Hotel