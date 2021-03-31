import React, {useState, useEffect} from 'react';

// Components
import {
  Grid,
} from '@material-ui/core';
import Row from '../Fragments/Row'
import Logo from '../../assets/images/logo1.png'
import Legoman1 from '../../assets/images/legoman1.jpeg'
import Legoman2 from '../../assets/images/legoman2.jpeg'
import ModalVideo from 'react-modal-video'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

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
          backgroundPosition: "300px center",
          backgroundRepeat: "repeat-x"
        }}
      >
        <Grid sm={1}></Grid>
        <Grid sm={9}>
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
                  style = {{margin: "100px"}}
                ></img>
              </Grid>
              <Grid item sm={2}></Grid>
              <Grid 
                item 
                container
              >
                <Grid item sm={1}></Grid>
                <Grid 
                  sm={4}
                  style={{color: "white"}}
                >
                  <h4>Code, Research, Entreprenuership, Art, Technology. Emory</h4>
                  <h1>THIS IS OUR MISSION STATEMENT WE ARE DEEP. WE DO GREAT THINGS AND SO CAN YOU.</h1>
                </Grid>
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
            backgroundImage: `url(https://content.techgig.com/thumb/msid-75430401,width-860,resizemode-4/5-tips-for-students-to-improve-coding-skills-during-college.jpg?58220)`,
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
                height: "30%",
                color: "pink"
              }}
            />
          </button>
        </Grid> 
      </Row>

      <Row
        height={6}
        styles={{
          backgroundImage: "url(https://www.xmple.com/wallpaper/white-pink-gradient-linear-1920x1080-c2-ffffff-ffc0cb-a-90-f-14.svg)"
        }}            
      >
        <Grid item sm={1}></Grid>
        <Grid 
          item 
          sm={10}
        >
          <div
            style={{
              height: "100%",
              fontSize: "40px",
              textAlign: "center",
              paddingTop: "250px"
            }}
          >
            MAKE A COOL INFOGRAPHIC HERE. Use a cool JS library
          </div>
        </Grid>
      </Row>

      <Row
        height={5} 
        styles={{
          backgroundImage: "url(https://camo.githubusercontent.com/02d3f7576f335b60d6467e1d28f37057575479cbe4cd79e9de25c20a09aafba8/687474703a2f2f692e696d6775722e636f6d2f5663674c47484e2e706e673f313f36343831)"
        }}     
        size={{
          alignItems: "center"
        }}      
      >

        <Grid item sm={2}></Grid>
        <Grid item sm={3}>
          <button
            style={{
              width: "100%",
              height: "100px",
              border: "2px solid blue",
              background: "white"
            }}
          >
            <h2>Contact Us</h2>
          </button>
        </Grid>
        <Grid 
          item
          sm={2}
          style={{
            border: "2px solid blue",
            height: "0px"
          }}
        ></Grid>
        <Grid item sm={3}>
          <button
            style={{
              width: "100%",
              height: "100px",
              border: "2px solid blue",
              background: "white"
            }}
          >
            <h2>Apply Now</h2>
          </button>
        </Grid>

      </Row>

      <Row
        height={11}
      >
        <Grid 
          item
          sm={12}
          style={{
            backgroundImage: "url(https://cdna.artstation.com/p/assets/images/images/011/866/132/original/sonia-casamento-hologram.gif?1531834473)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "40%"
          }}
        >
        </Grid>

        <Grid 
          item
          container
          sm={12}
        >

          <Grid item sm={1}></Grid>

          <Grid 
            item 
            sm={4}
          >
            <AwesomeSlider 
              media={[
                {
                  source: "https://www.dlf.pt/dfpng/middlepng/488-4884679_straight-face-clipart-vector-freeuse-free-coloring-medium.png",
                },
                {
                  source: "https://toppng.com/uploads/preview/monkey-1-clip-art-at-clker-monkey-face-clipart-11563009171r6p70uzhei.png",
                },
                {
                  source: "https://img.favpng.com/18/12/9/cat-kitten-face-clip-art-png-favpng-C9hPZyA2iKcU4BwYSCb50viXu.jpg"
                }
              ]}
            />
          </Grid>

          <Grid 
            item 
            sm={1}
            style={{
              borderRight: "1px solid black",
              position: "relative",
              top: "-30%",
              padding: "20px",
              height: "130%"
            }}
          >

          </Grid>

          <Grid 
            item
            container
            justify="center"
            sm={4}
            style={{
              background: "white",
              position: "relative",
              top: "-90%",
              padding: "20px",
              height: "150%",
              borderRight: "1px solid black"
            }}
          >

            <Grid item sm={12}>
              <h1>Learn More</h1>
            </Grid>

            <Grid item sm={12}>
              <button
                style={{
                  width: "70%",
                  background: "black",
                  color: "white",
                  height: "80%",
                  margin: "0 auto",
                  display: "block"
                }}
              >
                Mentor Program
              </button>
            </Grid>

            <Grid item sm={12}>
              <button
                style={{
                  width: "70%",
                  background: "black",
                  color: "white",
                  height: "80%",
                  margin: "0 auto",
                  display: "block"
                }}
              >
                Education
              </button>
            </Grid>

            <Grid item sm={12}>
              <button
                style={{
                  width: "70%",
                  background: "black",
                  color: "white",
                  height: "80%",
                  margin: "0 auto",
                  display: "block"
                }}
              >
                Professional Development
              </button>              
            </Grid>

            <Grid item sm={12}>
              <button
                style={{
                  width: "70%",
                  background: "black",
                  color: "white",
                  height: "80%",
                  margin: "0 auto",
                  display: "block"
                }}
              >
                Project Management 
              </button>              
            </Grid>   
            
            <Grid item sm={12}>
              <button
                style={{
                  width: "70%",
                  background: "black",
                  color: "white",
                  height: "80%",
                  margin: "0 auto",
                  display: "block"
                }}
              >
                The Blog
              </button>              
            </Grid>                                                            

          </Grid>

        </Grid>


      </Row>      
    </>
  )
}


export default HomePage;




//  5 6 5




