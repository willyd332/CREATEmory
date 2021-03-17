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

//image
import Logo from './images/CREATEmoryLogo.png';

const Navbar = (props) => {
  return(
    <Grid 
      className={styles.navbarBox}  
      container 
      item 
      sm={12}
      spacing={2}
      justify="center"
      alignItems = "center"
    >
      <Grid item xs={2}>
        <a href="/"Home>
          <img src = {Logo} width="80%" height="80%"/>
        </a>
      </Grid>
      
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