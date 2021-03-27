import React from 'react';
import './App.css';

// Components
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import AboutPageContainer from './components/AboutPage/AboutPageContainer'
import BlogPageContainer from './components/BlogPage/BlogPageContainer'
import HomePageContainer from './components/HomePage/HomePageContainer'
import PortfolioPageContainer from './components/PortfolioPage/PortfolioPageContainer'
import ContactPageContainer from './components/ContactPage/ContactPageContainer'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={AboutPageContainer} />
        <Route path="/blog" component={BlogPageContainer} />
        <Route path="/portfolio" component={PortfolioPageContainer} />
        <Route path="/contact" component={ContactPageContainer} />
        <Route path="/" component={HomePageContainer}  />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
