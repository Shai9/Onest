import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components';



const Hotel = (props) => {
  return (
    <div className=''>
      <div className=''>
          <img  className='' src={props.attributes.image_url}  alt={props.attributes.name}/>
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