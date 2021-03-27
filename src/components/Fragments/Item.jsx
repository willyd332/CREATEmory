import React from 'react'

// Compnenets
import {
  Grid,
} from '@material-ui/core';

// Default Styles
const defaultStyles = {
  marginTop: "0",
  border: "2px solid white",
  height: "10%",
  color: "white"
}

const defaultSize = {
  sm: 2,
}

const defaultCoordinates = {
  top: 0,
  left: 0
}

const defaultOpacity = 1;

const defaultAbsolute = false;


const Row = ({styles, size, children, absolute, opacity, coordinates}) => {

  // Defining default prop values
  coordinates = coordinates !== undefined ? coordinates: defaultCoordinates;
  opacity = opacity !== undefined ? opacity: defaultOpacity;
  absolute = absolute !== undefined ? absolute: defaultAbsolute;
  styles = styles !== undefined ? styles : defaultStyles;
  size = size !== undefined  ? size : defaultSize;


  if (absolute) {
    return(
      <>
        <Grid
          style={{
            ...styles,
            ...coordinates,
            position: "absolute",
            opacity: opacity
          }}
          {...size}
        >
          {children}
        </Grid>
        {
          // this is just a grid to create an invisible scrolling div to track!
        }
      </>
      );
  } else {
    return(
      <Grid
        style={{...styles, opacity: opacity}}
        {...size}
      >
        {children}
      </Grid>
      );
  }
}


export default Row;