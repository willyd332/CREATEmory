import React from 'react';


// Components
import {
  Grid,
  Typography,
  Card,
  CardContent
} from '@material-ui/core';
import Layout from '../Layout/Layout';
import {Link} from 'react-router-dom'
import {MDCBanner} from '@material/banner';

// Styles
const styles = {
  card: {
  },
  row: {
    marginTop: "100px"
  }
}


const HomePage = (props) => {
  return(
    <Layout>
      <h1>HomePage</h1>
      <Grid
        container
      >

      <Grid
        style={styles.row}
        item
        container
        sm={12}
      >
        <Grid 
          item
          sm={4}
        >
          <Card style={styles.card}>
            <CardContent>
              <Typography> We provide Project Management experience and help students develop professional development skills.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid
        style={styles.row}
        item
        container
        sm={12}
      >
        <Grid sm={4}/>
        <Grid 
          item
          sm={4}
        >
          <Card style={styles.card}>
            <CardContent>
              <Typography> We provide Project Management experience and help students develop professional development skills.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid
        style={styles.row}
        item
        container
        sm={12}
      >
        <Grid sm={8}/>
        <Grid 
          item 
          sm={4}
        >
          <Card style={styles.card}>
            <CardContent>
              <Typography> CREATEmory is creating a culture of collaboration and support in the Emory community. </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      </Grid>
    </Layout>
  )
}


export default HomePage;