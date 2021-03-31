import React, {useState, useEffect} from 'react';

// Components
import {
  Grid,

} from '@material-ui/core';
import Row from '../Fragments/Row'
import Logo from '../../assets/images/logo1.png'
import LogoGif from '../../assets/images/logoGif.gif'
import styles from './styles/homepage.module.css'

const HomePage = () => {
  return(
    <>
      <Grid
        container
      >
        <Row
          styles={{
            backgroundImage: `url(${Logo})`
          }}
        >
        </Row>

        <Row
          styles={{
            height: "inheret",
            paddingTop: "30px",
          }}
        >
          <Grid sm={1} />
          <Grid sm={3}>
            <div className={styles.description}>
              CREATEmory is a software engineering club designed to facilitate development projects and collaboration
              between Emory CS students, provide Project Management experience, and help students develop professional
              development skills. CREATEmory’s mission is to create a culture of collaboration and support in the Emory
              community, while also helping students further their careers.
            </div>
          </Grid>
          <Grid sm={1} />
          <Grid 
            sm={6}
            style={{
              backgroundImage: `url(${LogoGif})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
          />
        </Row>

        <Row
          styles={{
            backgroundImage: `url(https://media.gettyimages.com/photos/large-group-of-happy-people-jumping-with-raised-arms-picture-id468563322)`,
          }}
        >
        </Row>

        <Row>
          <Grid sm={12}>
            <h1 className={styles.problemHeader} >Not enough collaboration within the Emory CS community</h1>
          </Grid>
          <Grid sm={12}>
            <h1 className={styles.problemHeader}>CS students do not have much experience working in teams
</h1>
          </Grid>
          <Grid sm={12}>
            <h1 className={styles.problemHeader}>CS students don’t always have access to specialized/industry support</h1>
          </Grid>
          <Grid sm={12}>
            <h1 className={styles.problemHeader}>CS Students do not have many professional development resources
</h1>
          </Grid>          
        </Row>
        
      </Grid>
    </>
  )
}


export default HomePage;









