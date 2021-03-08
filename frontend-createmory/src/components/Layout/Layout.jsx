import React from 'react';

// Components
import { Grid, Box, Container } from '@material-ui/core';
import Navbar from './Navbar'
import Footer from './Footer'

// Styles
import styles from './styles/layout.module.css'

const Layout = ({ children }) => {
  return(
    <Grid container>
      <Navbar/>
      <Container>
        {children}
      </Container>
      <Footer/>
    </Grid>
  )
}


export default Layout;












