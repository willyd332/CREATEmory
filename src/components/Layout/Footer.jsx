import React from 'react';
import {
  AppBar,
  Container,
  Typography,
  Toolbar,
  Grid
} from '@material-ui/core'; 
// Components
const styles = {
  footer: {
  }
}
const Footer = (props) => {
  // return(
  //   <div>
  //     <h1>Footer</h1>
  //   </div>
  // )
  return (
    // <AppBar position="static" color="primary">
    //   <Container maxWidth="xl">
    //     <Toolbar>
    //       <Typography variant="body1" color="inherit">
    //         &copy; {new Date().getFullYear()} CREATEmory
    //       </Typography>
    //     </Toolbar>
    //   </Container>
    // </AppBar>
    
    <div>
      <AppBar position="static" color="white" style={styles.footer}>
        
        <Toolbar>
          <Grid container justify={"center"} spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography align={"center"}>
                About
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography align={"center"}>
                Contact
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography align={"center"}>
                Blog
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography align={"center"}>
                Portfolio
              </Typography>
            </Grid>
          </Grid>
          
        </Toolbar>
        <Toolbar>
        <Grid container item >
              <Typography align={"left"}>
                &copy;{new Date().getFullYear()} CREATEmory | All rights reserved | Terms | Policy
              </Typography>
            </Grid>
        </Toolbar>
      
      </AppBar>
      
    </div>
)
}


export default Footer;