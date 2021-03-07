import React from 'react';
import './App.css';

// Components
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import LayoutOne from './components/Layout/Layout';
import AboutPage from './components/AboutPage/AboutPage'
import BlogPage from './components/BlogPage/BlogPage'
import HomePage from './components/HomePage/HomePage'
import PortfolioPage from './components/PortfolioPage/PortfolioPage'
import ContactPage from './components/ContactPage/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWrapper path="/" component={HomePage} layout={LayoutOne} />
        <RouteWrapper path="/about" component={AboutPage} layout={LayoutOne} />
        <RouteWrapper path="/blog" component={BlogPage} layout={LayoutOne} />
        <RouteWrapper path="/portfolio" component={PortfolioPage} layout={LayoutOne} />
        <RouteWrapper path="/contact" component={ContactPage} layout={LayoutOne} />
      </Switch>
    </BrowserRouter>
  );
}

const RouteWrapper = ({component: Component, layout: Layout, path}) => {
  return (
    <Route path={path} >
      <Layout >
        <Component />
      </Layout>
    </Route>
  );
}

export default App;
