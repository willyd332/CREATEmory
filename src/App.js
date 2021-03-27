import React from 'react';
import './App.css';

// Components
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import AboutPage from './components/AboutPage/AboutPage'
import BlogPage from './components/BlogPage/BlogPage'
import HomePageContainer from './components/HomePage/HomePageContainer'
import PortfolioPage from './components/PortfolioPage/PortfolioPage'
import ContactPageContainer from './components/ContactPage/ContactPageContainer'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/contact" component={ContactPageContainer} />
        <Route path="/" component={HomePageContainer}  />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
