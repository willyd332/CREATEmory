import React, {useState} from 'react';

// Components
import {
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import ReorderRoundedIcon from '@material-ui/icons/ReorderRounded';
import {Link} from 'react-router-dom'


//image
import Logo from './images/CREATEmoryLogo.png';

// Styles
const styles = {
  navbarCircle: {
    color: "white",
    height: "15vh",
    width: "15vh",
    position: "absolute",
    top: "-3vh",
    right: "-3vh"
  },
  largeIcon: {
    height: "8vh",
    width: "8vh",
    color: "white",
  },
  iconButton: {
    width: "100%",
    height: "100%",
    background: "rgb(255, 111, 82, .5)",
  },
  iconButtonHover: {
    background: "white",
  }
}


const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = React.useState(null);

  const handleClick = (event) => {
    setMenuOpen(event.currentTarget);
  };

  const handleClose = () => {
    setMenuOpen(null);
  };

  return(
    <div>
      <div style={styles.navbarCircle}>
        <IconButton 
          style={styles.iconButton}
          hoveredStyle={styles.iconButtonHover}
          aria-controls="simple-menu" 
          aria-haspopup="true" 
          onClick={handleClick}
        >
          <ReorderRoundedIcon style={styles.largeIcon} color="secondary"/>
        </IconButton>
        <Menu
          anchorEl={menuOpen}
          keepMounted
          open={menuOpen}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}><Link to="/">Home</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/about">About</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/contact">Contact</Link> </MenuItem>
          <MenuItem onClick={handleClose}><Link to="/blog">Blog</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/portfolio">Portfolio</Link></MenuItem>
        </Menu>
      </div>
    </div>
  )
}

// const Navbar = (props) => {
//   return(
//     <Grid 
//       style={styles.navbarCircle} 
//       container 
//       item 
//       sm={12}
//       spacing={2}
//       justify="center"
//       alignItems = "center"
//     >
//       <Grid item xs={2}>
//         <a href="/"Home>
//           <img src = {Logo} width="80%" height="80%"/>
//         </a>
//       </Grid>
      
//       <Grid 
//         item
//         container 
//         xs={2}
//       >
//         <Link to="/">Home</Link>
//       </Grid>
//       <Grid item xs={2}>
//         <Link to="/about">About</Link>
//       </Grid>
//       <Grid item xs={2}>
//         <Link to="/contact">Contact</Link>      
//       </Grid>
//       <Grid item xs={2}>
//       <Link to="/blog">Blog</Link>
//       </Grid>
//       <Grid item xs={2}>
//         <Link to="/portfolio">Portfolio</Link>
//       </Grid>
//     </Grid>
//   )
// }


export default Navbar;











