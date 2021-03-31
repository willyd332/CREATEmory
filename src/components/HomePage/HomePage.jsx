import React, {useState, useEffect} from 'react';

// Components
import {
  Grid,
} from '@material-ui/core';
import Row from '../Fragments/Row'
import Logo from '../../assets/images/logo1.png'
import ModalVideo from 'react-modal-video'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

// Styles
import styles from './styles/homepage.module.css'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

const HomePage = () => {
  const [vidIsOpen, setVidIsOpen] = useState(false)


  return(
    <>
      <Row
        height={8}
        styles={{
          backgroundImage: `url(https://media.giphy.com/media/3oz8xXj6aQlEgGnhhS/giphy.gif)`,
        }}
      >
        <Grid 
          item 
          direction="column"
          container 
          sm={12}
        >
          <Grid item sm={1}>
            <img
              alt="Create Emory Logo"
              src={Logo}
              style = {{margin: "10px"}}
            ></img>
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid 
            item 
            container
          >
            <Grid item sm={1}></Grid>
            <Grid 
              sm={3}
              style={{color: "white"}}
            >
              <h4>Code, Research, Entreprenuership, Art, Technology. Emory</h4>
              <h1>THIS IS OUR MISSION STATEMENT WE ARE DEEP. WE DO GREAT THINGS AND SO CAN YOU.</h1>
            </Grid>
          </Grid>
        </Grid>
      </Row>

      <Row
        height={6}
      >
        <Grid item sm={6}>
          <div
            style={{
              width: "80%",
              margin: "100px auto",
              borderLeft: "3px solid pink",
              padding: "20px"
            }}
          >
            <h1>THIS IS WHAT WE DO</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at nibh gravida, molestie turpis nec, dapibus neque. Donec et vestibulum quam, nec ultricies turpis. Suspendisse in ipsum nec leo efficitur malesuada dignissim cursus nisi. Curabitur vel eros ac ligula imperdiet placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sit amet justo at nibh molestie pretium nec a turpis. In lacus metus, venenatis eget nibh eget, rhoncus consectetur nulla. Proin neque eros, elementum eu viverra auctor, pharetra eget ante. Etiam interdum, quam a euismod dapibus, augue massa lacinia augue, at lacinia erat urna et leo.</p>
          </div>
        </Grid>

        <Grid 
          item 
          sm={6}
          style={{
            backgroundImage: `url(https://www.leadplaats.nl/wp-content/uploads/2014/02/blog-employees-scaled.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
           <ModalVideo channel='youtube' autoplay isOpen={vidIsOpen} videoId="bxqLsrlakK8" onClose={() => setVidIsOpen(false)} />

          <button 
            style={{
              background: "none",
              border: "none",
              width: "100%",
              height: "100%"
            }}
            onClick={()=> setVidIsOpen(true)}
          >
            <PlayCircleFilledIcon
              style={{
                width: "30%",
                height: "30%"
              }}
            />
          </button>
        </Grid> 
      </Row>

      <Row
        height={6}            
      >

      </Row>

      <Row
        height={5}            
      >

      </Row>

      <Row
        height={11}
      >

      </Row>      
    </>
  )
}


export default HomePage;




//  5 6 5




