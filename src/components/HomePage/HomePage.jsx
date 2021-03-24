import React, {useState, useEffect} from 'react';

// Components
import {
  Grid,
  Card,

} from '@material-ui/core';
import Layout from '../Layout/Layout';
import Row from '../Fragments/Row'


const HomePage = ({scrollPosition, scrollPercentage}) => {
  const [opacityValues, setOpacityValues] =  useState([1,0,0])

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!BREAK THIS OUT INTO A FUNCTION/COMPONENT SO IT CAN BE USED ELSEWHERE!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // Use an effect to update the opacity of rows depending on scroll
  useEffect(() => {

    // Calculate the percentages of the top of each row
    const numberOfRows = 3;
    const heightOfRows = 1/numberOfRows
    const topsOfRows = [];
    for (let i = 0; i < 3; i++){
      topsOfRows.push(i*heightOfRows)
    }

    // Calculate new opacities
    const newValues = topsOfRows.map((top) => {
      const distanceFromTop = scrollPercentage - top;
      if (distanceFromTop < (heightOfRows/2) && distanceFromTop > -heightOfRows/2){
        // Use a polynomial to represent the fade in
        return(Math.abs(1+(-((distanceFromTop/.5)**2))))
      } else {
        // Use a Rational Function to represent the fade out
        return((((heightOfRows/2)/distanceFromTop)**2)/((distanceFromTop/(heightOfRows/2))**2))
      }
    });
    // Update values
    setOpacityValues(newValues)
  }, [scrollPercentage])

  return(
    <>
      <Grid
        container
      >
        <Row absolute opacity={opacityValues[0]}>
          <img 
            src="https://external-preview.redd.it/4kLtoBKq6dl4rzpLsoC0gRqdMsJAMnisp1QZUOhhYMw.jpg?width=640&crop=smart&auto=webp&s=fd5020a3bce6bbe8dfc16815cf5c2bafa5c2fee8"
            style={{width:"100%", height: "100%"}}
            alt="space"
          />
        </Row>

        <Row absolute opacity={opacityValues[1]}>
          <img 
            src="https://ae01.alicdn.com/kf/HTB1hqUtexWYBuNjy1zkq6xGGpXaw/Universe-stars-nebula-galaxy-space-photo-studio-background-Vinyl-cloth-High-quality-Computer-print-wall-photo.jpg_q50.jpg"
            style={{width:"100%", height: "100%"}}
            alt="space"
          />
        </Row>

        <Row absolute opacity={opacityValues[2]}>
          <img 
            src="https://previews.123rf.com/images/maximusnd/maximusnd1804/maximusnd180402782/99000326-high-quality-space-background-.jpg"
            style={{width:"100%", height: "100%"}}
            alt="space"
          />
        </Row>
        
      </Grid>
    </>
  )
}


export default HomePage;