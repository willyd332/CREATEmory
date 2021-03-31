import React from 'react'

// Compnenets
import {
  Grid,
} from '@material-ui/core';

// Default Styles
const defaultStyles = {
  marginTop: "0",
  height: "100vh",
  background: "white",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  border: "1px solid black"

}

const defaultSize = {
  sm: 12,
  item: true,
  container: true
}

const defaultCoordinates = {
  top: 0,
  left: 0
}

const defaultOpacity = 1;

const defaultAbsolute = false;

const defaultHeight = "100vh"


const Row = ({styles, size, children, absolute, opacity, coordinates, height}) => {

  // Defining default prop values
  coordinates = coordinates !== undefined ? coordinates: defaultCoordinates;
  opacity = opacity !== undefined ? opacity: defaultOpacity;
  absolute = absolute !== undefined ? absolute: defaultAbsolute;
  styles = styles !== undefined ? {...defaultStyles, ...styles} : defaultStyles;
  size = size !== undefined  ? size : defaultSize;
  height = height !== undefined  ? (`${height * 10}vh`) : defaultHeight;


  if (absolute) {
    return(
      <>
        <Grid
          style={{
            ...styles,
            ...coordinates,
            position: "absolute",
            opacity: opacity,
            height: height
          }}
          {...size}
        >
          {children}
        </Grid>
        {
          // this is just a grid to create an invisible scrolling div to track!
        }
        <div style={{height: "100vh", width: "100vw", zIndex: 2}}></div>
      </>
      );
  } else {
    return(
      <Grid
        style={{...styles, opacity: opacity, height: height}}
        {...size}
      >
        {children}
      </Grid>
      );
  }
}


export default Row;



/*
ROW DOCS
Height
  - Value from 1 to 10 that defines height

Styles
  - An object of any custom styles you want
  - DON'T FORGET TO ADD THE S!!

Absolute
  - A boolean that will make the row absolute and create the Clearfix div

Coordinates
  - Only for absolute rows. Defines the coordinates of the row for animation effects

Size
  - An object that you can use to apply any material UI properties 
  - ex. <Row size={{sm: 2, lg: 6, }}

Opacity
  - Defines the opacity of the row (seperate in case one wants to use animations)

*/