import React, {useState, useEffect} from 'react';

// Components
import {
  Grid,
  Card,

} from '@material-ui/core';
import Row from '../Fragments/Row'


const HomePage = ({scrollPosition, scrollPercentage}) => {
  const [opacityValues, setOpacityValues] =  useState([1,0,0])

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!BREAK THIS OUT INTO A FUNCTION/COMPONENT SO IT CAN BE USED ELSEWHERE!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // Use an effect to update the opacity of rows depending on scroll
  useEffect(() => {
    console.log(scrollPercentage)

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
            src="https://officialpsds.com/imageview/71/ym/71ymvv_large.png?1521316467"
            style={{width:"100%", height: "100%"}}
            alt="space"
          />
        </Row>

        <Row absolute opacity={opacityValues[1]}>
          <img 
            src="https://i.pinimg.com/originals/89/00/4b/89004be943011dffa76598bd33170660.png"
            style={{width:"100%", height: "100%"}}
            alt="space"
          />
        </Row>

        <Row absolute opacity={opacityValues[2]}>
          <img 
            src="https://www.pikpng.com/pngl/b/58-581481_abstract-swirl-png-transparent-image-flower-art-design.png"
            style={{width:"100%", height: "100%"}}
            alt="space"
          />
        </Row>
        
      </Grid>
    </>
  )
}


export default HomePage;









