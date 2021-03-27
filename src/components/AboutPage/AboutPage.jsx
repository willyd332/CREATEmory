import React from 'react';

// Components
import {
  Grid,
} from '@material-ui/core';
import Layout from '../Layout/Layout';
import Row from '../Fragments/Row'

const AboutPage = (props) => {
  return(
    <Layout>
      <Grid
        container
      >

      <Row></Row>
      <Row></Row>
      <Row></Row>
      <Row></Row>

      </Grid>
    </Layout>
  )
}


export default AboutPage;