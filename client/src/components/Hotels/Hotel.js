import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  border-radius: 25px;
`

const HotelLogo = styled.div`
  height: 50px;
  img {
    height: 50px;
    width: 50px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 100%;
  }
`

const HotelName = styled.div`
  padding: 20px 0 10px 0;
`

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height:50px;
  a {
    
    background-color: #71b406;
    border-radius: 4px;
    padding: 10px 50px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #71b406;
    text-align: center;
    line-height: 20px;
    min-height: 40px;
    margin: 7px;
    font-weight: 600;
    text-decoration: none;
    width: 100%;
    transition: ease-in-out 0.1s;
    &:hover{
      border-color: #619a07;
      background: #619a07;
    }
  }
`

const Hotel = (props) => {
  return (
    <Card>
      <HotelLogo>
          <img src={props.attributes.image_url}  alt={props.attributes.name}/>
      </HotelLogo>
      <HotelName>{props.attributes.name}</HotelName>
      <div className='hotel-avg_score'>{props.attributes.avg_score}</div>
      <LinkWrapper>
        <Link to={`/hotels/${props.attributes.slug}`}>View Hotel</Link>
      </LinkWrapper>
    </Card>
  )
}

export default Hotel