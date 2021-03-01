import logo from './logo.svg';
import './App.css';
import { render } from 'ejs';

function NavBar(){
  return(
    <>
    </>
  );
}

function HomePage() {
  return(
    <h1> HomePage</h1>
  );
}
function AboutUs() {
  return(
    <h1>AboutUs</h1>
  );
}

function ContactUs() {
  return(
    <h1>ContactUs</h1>
  );
}

function Footer(){
  return(
    <>
      <h1>This is the footer</h1>
    </>
  );
}

function App() {
  return (
    <div className="App">

      <h1>CREATEmory</h1>
      <HomePage/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>

    </div>
  /* 
    <Router>
      <Navbar/>
    </Router>
    */
  );
}

export default App;
