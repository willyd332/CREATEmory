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
        <Row
          size={{sm: 8}}
          offset={{sm: 2}}
        >
        </Row>

        <Row
          size={{sm: 8}}
          offset={{sm: 2}}
        >

        </Row>

        <Row
          size={{sm: 8}}
          offset={{sm: 2}}
        >

        </Row>

      </Grid>
    </Layout>
  )
}


export default AboutPage;