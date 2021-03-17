import React from 'react';


// Components
import {
  Button,
  Grid,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
} from '@material-ui/core';
import Layout from '../Layout/Layout';
import {Link} from 'react-router-dom'
import {MDCBanner} from '@material/banner';

// Styles
import styles from './styles/homepage.module.css'


const HomePage = (props) => {
  return(
    <Layout>
      <Grid
        container
        direction = "column"
      >

        <Grid item className={styles.homepageBox}>
          <div className = {styles.bannerBox}>
            <p> CREATEmory is a new software engineering club designed to facilitate development projects and collaboration between Emory CS students. </p>
          </div>
        </Grid>
        <Grid item className={styles.homepageBox}>
          <div className = {styles.bannerBox}>
            <p> We provide Project Management experience and help students develop professional development skills.  </p>
          </div>
        </Grid>
        <Grid item className={styles.homepageBox}>
          <div className = {styles.bannerBox}>
            <p> CREATEmory is creating a culture of collaboration and support in the Emory community. </p>
          </div>
        </Grid>
      </Grid>
    </Layout>
  )
}


export default HomePage;