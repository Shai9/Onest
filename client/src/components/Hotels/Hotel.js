import React from 'react'

const Hotel = (props) => {
  return (
    <div className=''>
      <div className=''>
          <img src={props.attributes.image_url}  alt={props.attributes.name}/>
      </div>
      <div className=''>{props.attributes.name}</div>
      <div className=''>{props.attributes.avg_score}</div>
      <div className=''>
        <a href={`/hotels/${props.attributes.slug}`}>View Hotel</a>
      </div>
    </div>
  )
}

export default Hotel