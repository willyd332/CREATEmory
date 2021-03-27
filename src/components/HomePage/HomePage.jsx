import React, {useState, useEffect} from 'react';

// Components
import {
  Grid,
  Card,

} from '@material-ui/core';
import Row from '../Fragments/Row'
import Item from '../Fragments/Item'


const HomePage = ({scrollPosition, scrollPercentage}) => {

  return(
    <>
      <Grid
        container
      >

      <Row>
        <Item>
          Hello World
        </Item>
        <Item>
          Hello World
        </Item>
        <Item>
          Hello World
        </Item>
      </Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>

        
      </Grid>
    </>
  )
}


export default HomePage;









