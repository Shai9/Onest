import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 50px 100px 50px 0px;
  font-size: bold;

  img {
    height: 70px;
    width: 70px;
    border-radius: 100px;
    border: 1px;
    margin-bottom: -8px;

`
const TotalReviews=styled.div`
  font-size: 18px;
  padding: 10px 0px;
`
const TotalOutOf = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0px;
`

const Header = (props) => {

  const {name, image_url, avg_score} = props.attributes
  const total = props.reviews.length
  return (
    <Wrapper>
      <h1> <img src={image_url}  alt={name}/>{name}</h1>
      <div>
        <TotalReviews>{total} User Reviews</TotalReviews>
        <div className='star rating'></div>
        <TotalOutOf>{avg_score} out of 5</TotalOutOf>
      </div>
    </Wrapper>
  )
}

export default Header