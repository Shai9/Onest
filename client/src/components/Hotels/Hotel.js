import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Hotel = (props) => {
  return (
    <div className=''>
      <div className=''>
          <img src={props.attributes.image_url}  alt={props.attributes.name}/>
      </div>
      <div className=''>{props.attributes.name}</div>
      <div className=''>{props.attributes.avg_score}</div>
      <div className=''>
        <Link to={`/hotels/${props.attributes.slug}`}>View Hotel</Link>
      </div>
    </div>
  )
}

export default Hotel