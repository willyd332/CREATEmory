import React, {useState, useEffect} from 'react';

// Components
import {
  Grid,
} from '@material-ui/core';
import Row from '../Fragments/Row'

const ContactPage = () => {

  

  return(
    <>
      <Grid
        container
      >

      <Row
      >
        THE FIRST ROW!!
      </Row>
      <Row
      >
        THE SECOND ROW!!
      </Row>

      </Grid>
    </>
  )
}


export default ContactPage;