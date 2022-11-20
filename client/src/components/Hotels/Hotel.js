import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Hotel = (props) => {
  return (
    <div className='border bg-sky-500'>
      <div className='min-h-[50px]'>
          <img  className='min-h-[50px] w-12 rounded border' src={props.attributes.image_url}  alt={props.attributes.name}/>
      </div>
      <div className='p-6'>{props.attributes.name}</div>
      <div className='scroll-ml-1 h-1'>{props.attributes.avg_score}</div>
      <div className=''>
        <Link to={`/hotels/${props.attributes.slug}`}>View Hotel</Link>
      </div>
    </div>
  )
}

export default Hotel