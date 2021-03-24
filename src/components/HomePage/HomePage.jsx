import React, {useState} from 'react';

// Components
import {
  Grid,
  Card,

} from '@material-ui/core';
import Layout from '../Layout/Layout';
import Row from '../Fragments/Row'


const HomePage = (props) => {
  

  return(
    <Layout>
      <Grid
        container
      >
        <Row absolute>
          <img 
            src="https://external-preview.redd.it/4kLtoBKq6dl4rzpLsoC0gRqdMsJAMnisp1QZUOhhYMw.jpg?width=640&crop=smart&auto=webp&s=fd5020a3bce6bbe8dfc16815cf5c2bafa5c2fee8"
            style={{width:"100%", height: "100%"}}
            alt="space"
          />
        </Row>

        <Row absolute opacity={0}>
          <img 
            src="https://ae01.alicdn.com/kf/HTB1hqUtexWYBuNjy1zkq6xGGpXaw/Universe-stars-nebula-galaxy-space-photo-studio-background-Vinyl-cloth-High-quality-Computer-print-wall-photo.jpg_q50.jpg"
            style={{width:"100%", height: "100%"}}
            alt="space"
          />
        </Row>

        <Row absolute opacity={0}>
          <img 
            src="https://previews.123rf.com/images/maximusnd/maximusnd1804/maximusnd180402782/99000326-high-quality-space-background-.jpg"
            style={{width:"100%", height: "100%"}}
            alt="space"
          />
        </Row>
        
      </Grid>
    </Layout>
  )
}


export default HomePage;