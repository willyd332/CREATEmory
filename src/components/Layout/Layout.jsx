import React, {useState} from 'react';


// Functions
import { getScrollPosition, getScrollPercentage } from '../../functions/ScrollFunctions'

// Components
import { Box, Container } from '@material-ui/core';
import Navbar from './Navbar'
import Footer from './Footer'
import Row from '../Fragments/Row'
import { isExpressionWithTypeArguments } from 'typescript';

const style = {
  container: {
    height: '100vh', 
    overflow: 'hidden',
    position: "absolute",
    top: "0",
    left: "0",
  },
  box: {
    overflow: 'scroll',
    maxHeight: "100vh",
    minHeight: "100vh"
    // backgroundColor: "red"
  }
}

const Layout = ({ children }) => {

  const [scrollPosition, setScrollPosition] = useState(getScrollPosition())
  const [scrollPercentage, setScrollPercentage] = useState(getScrollPercentage())


  // Handler function to handles the scroll event
  const handleScroll = () => {
    setScrollPosition(getScrollPosition());

    setScrollPercentage(getScrollPercentage());
  }

  return(
    <Container style={{...style.container}} maxWidth="false">
      <Navbar/>
      <Box className="scrollBox" onScroll={handleScroll} style={{...style.box}} my={0} mx={0}>
        {
          React.Children.map(children, child => {
            return React.cloneElement(child, {scrollPosition: scrollPosition, scrollPercentage: scrollPercentage});
          })
        }
        <Row
          styles={{height: "10vh"}}
        >
          <Footer/>
        </Row>
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








