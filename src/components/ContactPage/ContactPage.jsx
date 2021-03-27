import React, {useState, useEffect} from 'react';

// Components
import {
  Grid,
} from '@material-ui/core';
import Row from '../Fragments/Row'

const ContactPage = ({pageWidth, scrollPercentage}) => {

  const [leftCoordinate, setLeftCoordinate]= useState(pageWidth)

  

  useEffect(() => {
      const newCoordinate = ((pageWidth - (pageWidth * (scrollPercentage*2))) > 0) ? (pageWidth - (pageWidth * (scrollPercentage*2))) : 0;
      setLeftCoordinate(newCoordinate)
      console.log("1: " + leftCoordinate);
      console.log("2: " + leftCoordinate1);
  }, [scrollPercentage, pageWidth])

  const leftCoordinate1 = -(pageWidth - leftCoordinate);
  

  return(
    <>
      <Grid
        container
      >

      <Row
        absolute
        coordinates={{top: 0, left: leftCoordinate1}}
      >
        THE FIRST ROW!!
      </Row>
      <Row
        coordinates={{top: 0, left: leftCoordinate}}
        absolute
      >
        THE SECOND ROW!!
      </Row>

      </Grid>
    </>
  )
}


export default ContactPage;