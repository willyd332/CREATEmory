import React from 'react';

// Components
import { Grid, Container } from '@material-ui/core';
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return(
    <div>
      <Navbar/>
      <Container>{children}</Container>
      <Container><Footer/></Container>
    </div>
  )
}


export default Layout;