import React from 'react';
// Components
import { Grid, Box, Container } from '@material-ui/core';
import Navbar from './Navbar'
import Footer from './Footer'

const style = {
  container: {
    height: '100vh', 
    overflow: 'hidden',
    position: "absolute",
    top: "0",
    left: "0",
  },
  box: {
    height: "100vh",
    overflow: 'scroll',
    // backgroundColor: "red"
  }
}

const Layout = ({ children }) => {

  return(
    <Container style={{...style.container}} maxWidth="false">
      <Navbar/>
      <Box style={{...style.box}} my={0} mx={4}>
        {children}
        <Footer/>
      </Box>
    </Container>
  )
}


export default Layout;



/*
Todo:
  - Change stlyes to inline styles
  - Make container max width
  - Set up the grid system to easily allow for "floating elements"
  - Set up a demo page that fully utilizes the Wireframe and record a video of you going through the process
*/








