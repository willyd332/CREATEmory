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

      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>

        
      </Grid>
    </>
  )
}


export default HomePage;









