import {React, useState, useEffect} from 'react'
import axios from 'axios'
import Hotel from './Hotel'
import styled from 'styled-components';

const Home =styled.div`
    text-align: center;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
`
const Header=styled.div`
    padding: 100px 100px 10px 100px;

    h1 {
      font-size: 25px;
    }
`
const Subheader=styled.div`
    font-weight: 300px;
    font-size: 26px;
`
const Grid=styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`

const Hotels = () => {
  const [hotels, setHotels] = useState([])

  useEffect (()=> {
      //get all hotels from the api
      //update all hotels in state
    axios.get('https://onest-azpw.onrender.com')
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
    <Home>
      <Header>
        <h1>ONEST</h1>
        <Subheader>Honest Hotel Reviews</Subheader>
      </Header>
      <Grid>
        {grid}
      </Grid>
    </Home>
  )
}

export default Hotels