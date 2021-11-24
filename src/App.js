import React, { Component } from 'react'
import {BrowserRouter , Route ,Link ,Switch} from 'react-router-dom';
import Home from "./Home/Home";
import About from './About/About';
import Contact from './Contact/Contact';
import Detailse from './Detailse/Detailse';
import Signin from './Signin/Signin'
import './App.css';
import { Button } from 'reactstrap';
import Footer from './Footer/Footer';
export class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <span className="name">Online Courses <span className="logo"><i class="fas fa-book-reader"></i></span></span>
          <div className="nav">
            <BrowserRouter>
              <Link to="/" className="link2">
                Home
                </Link>
              <Link to="/About" className="link">
                About
              </Link>
              <Link to="/Contact" className="link1">
                Contact
              </Link>
              <Link to="/signin" className="signin">
                Log In
              </Link>
              <Switch>
                <Route path="/" component={Home} exact />
                {/* <Route path="/Detailse" component={Detailse} /> */}
                <Route path="/Detailse/:id" render={props=>(
                <Detailse {...props}/>
              )}>
              </Route>
                <Route path="/About" component={About} exact />
                <Route path="/Contact" component={Contact} exact/>
                <Route path="/Signin" component={Signin} exact/>
              </Switch>
            </BrowserRouter>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default App

