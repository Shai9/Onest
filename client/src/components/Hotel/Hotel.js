import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Header'
// import styled from 'styled-components'

// const Wrapper = styled.div`
//   margin-left: auto;
//   margin-right: auto;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr)
// `
// const Column = styled.div`
//   background: white;
//   height: 100vh;
//   overflow: scroll

//   $last-child {
//     background: black;
//   }
// `
// const Main= styled.div`
//   padding-left: 50px;
// `

const Hotel = (props) => {

    const [hotel, setHotel] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
      const slug = props.match.params.slug
      const url = `api/v1/hotels/${slug}`
      // api/v1/hotels/ole-sereni
      // hotels/ole-sereni
      axios.get(url)
      .then( resp => { 
        setHotel(resp.data)
        setLoaded(true)
        })
      .catch(resp = console.log(resp))
    },[])
    return(
      <Wrapper>
        <Column>
          <Main>
            {
              loaded &&
              <Header 
                attributes = {hotel.data.attributes}
                reviews = {hotel.included}
              />
            }
            <div className='reviews'></div>
          </Main>
        </Column>
        <div className='columns'>
          <div className='review-form'>Review Goes Here</div>
        </div>
      </Wrapper>
    )
} 
export default Hotel

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const Hotel = (props) => {
 
//     const [hotel, setHotel] = useState({})
//     const [review, setReview] = useState({})

//     useEffect(() => {
//       const slug = props.match.params.slug
//         axios.get(`api/v1/hotels/${slug}`)
//         .then(resp => console.log(resp))
//         .catch(resp => console.log(resp))
//     })

//     return (
//       <div>
//         This is the single hotel section
//       </div>
//   )
// }

// export default Hotel