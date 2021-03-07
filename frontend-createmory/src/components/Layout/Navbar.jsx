import React from 'react';

// Components
import { Grid } from '@material-ui/core';
import {Link} from 'react-router-dom'

const Navbar = (props) => {
  return(
    <Grid container spacing={3}>
      <Grid item xs={2}>
          <Link to="/">Home</Link>
        </Grid>
        <Grid item xs={2}>
          <Link to="/about">About</Link>
        </Grid>
        <Grid item xs={2}>
          <Link to="/blog">Blog</Link>
        </Grid>
        <Grid item xs={2}>
          <Link to="/contact">Contact</Link>
        </Grid>
        <Grid item xs={2}>
          <Link to="/portfolio">Portfolio</Link>
        </Grid>
    </Grid>
  )
}


export default Navbar;