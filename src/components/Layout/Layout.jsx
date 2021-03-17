import React from 'react';

// Components
import { Grid, Box, Container } from '@material-ui/core';
import Navbar from './Navbar'
import Footer from './Footer'


const documentWidth = document.documentElement.clientWidth;
const windowWidth = window.innerWidth;
const scrollBarWidth = windowWidth - documentWidth;

const style1 = {
  height: '90vh', 
  overflow: 'scroll',
  marginTop: "0px",
}



const Layout = ({ children }) => {
  return(
    <Container style={style1} maxWidth="lg">
      <Box my={0} mx={4}>
        <Navbar/>
        {children}
        <Footer/>
      </Box>
    </Container>
  )
}


export default Layout;












