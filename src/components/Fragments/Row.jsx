import React from 'react'

// Compnenets
import {
  Grid,
} from '@material-ui/core';

// Styles
const defaultStyles = {
  row: {
    marginTop: "100px",
    border: "2px solid white",
    minHeight: "30vh"
  }
}


const Row = (props) => {

  const styles = props.styles ? props.styles : defaultStyles;

  return(
  <Grid
    style={styles.row}
    item
    container
    sm={12}
  >
    <Grid {...props.offset}/>
    <Grid 
      item
      container
      {...props.size}
    >
      {props.children}
    </Grid>
  </Grid>
  )
}


export default Row;