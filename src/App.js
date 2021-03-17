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
import HomePage from './components/HomePage/HomePage'
import PortfolioPage from './components/PortfolioPage/PortfolioPage'
import ContactPage from './components/ContactPage/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/" component={HomePage}  />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
