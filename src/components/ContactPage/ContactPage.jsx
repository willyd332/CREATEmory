import React, {useState, useEffect} from 'react';

// Components
import {
  Grid,
} from '@material-ui/core';
import Row from '../Fragments/Row'

const ContactPage = ({pageWidth, scrollPercentage}) => {

  const [leftCoordinate, setLeftCoordinate]= useState(pageWidth)

  console.log(scrollPercentage)

  useEffect(() => {
      const newCoordinate = ((pageWidth - (pageWidth * (scrollPercentage*2))) > 0) ? (pageWidth - (pageWidth * (scrollPercentage*2))) : 0;
      setLeftCoordinate(newCoordinate)
  }, [scrollPercentage, pageWidth])

  return(
    <>
      <Grid
        container
      >

      <Row
        absolute
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