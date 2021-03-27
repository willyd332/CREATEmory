import React, {useState, useEffect} from 'react';

// Components
import {
  Grid,
  Card,

} from '@material-ui/core';
import Row from '../Fragments/Row'
import Item from '../Fragments/Item'

import Letters from "./../../assets/letters"


const HomePage = ({scrollPosition, scrollPercentage}) => {


  const generateLetters = () => {
    const letters = Object.keys(Letters).map((key) => {
      console.log(Letters[key])
      return Letters[key];
    });


    return letters.map((data, index) => {
      return(
        <Item
          absolute
          styles = {{
            width: "20%",
          }}
          coordinates = {{
            top: `${index * 6}%`,
            left: `${index * 8}%`,
          }}
        >
          <img 
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            display: "block",
            margin: "0 auto"
          }}
          src={data.img.default} alt={data.letter}
          />
        </Item>
      );
    });
  }

  return(
    <>
      <Grid
        container
      >

      <Row>
        {generateLetters()}
      </Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>

        
      </Grid>
    </>
  )
}


export default HomePage;









