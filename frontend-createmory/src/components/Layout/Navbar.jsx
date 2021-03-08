import React from 'react';

// Components
import {
  Button,
  Grid,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
} from '@material-ui/core';
import {Link} from 'react-router-dom'

// Styles
import styles from './styles/navbar.module.css'

const Navbar = (props) => {
  return(
    <Grid 
      className={styles.navbarBox}  
      container 
      item 
      sm={12}
      spacing={2}
      justify="center"
    >
      <Grid 
        item
        container 
        xs={2}
      >
        <Link to="/">Home</Link>
      </Grid>
      <Grid item xs={2}>
        <Link to="/about">About</Link>
      </Grid>
      <Grid item xs={2}>
        <Link to="/contact">Contact</Link>      
      </Grid>
      <Grid item xs={2}>
      <Link to="/blog">Blog</Link>
      </Grid>
      <Grid item xs={2}>
        <Link to="/portfolio">Portfolio</Link>
      </Grid>
    </Grid>
  )
}


export default Navbar;





















/*
    <Grid className={styles.navbarBox} container spacing={3}>
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
*/