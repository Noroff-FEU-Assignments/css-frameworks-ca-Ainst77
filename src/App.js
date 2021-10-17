
import './sass/style.scss';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import News from './components/news/News';
import Home  from './components/home/Home';
import Contact from './components/contact/Contact';
import Footer from './components/Footer';


export default function App() {
  return (
    <> 
    <div className="footer-wrapper">
    <Router>
      
      <div>
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">The YaY Company</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink exact to="/News" className="nav-link">News</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/Contact" className="nav-link">Contact</NavLink>
              </li>  
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Go</button>
            </form>
        </div>
        </div>
      </nav>
     </>
   
    
    
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          
        </Switch>
      </div>
    </Router>
    
    </div>
  <Footer/ >
 



 </>
  );
}



