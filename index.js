import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GivingTree from './GivingTree';
import HungerGames from './HungerGames'
import Holes from './Holes'
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link
  // etc.
} from 'react-router-dom';

// Home component

class Home extends Component {
    render(){
      return(
        <div>
          <h1>React Router Restaurant</h1>
          <h4>Serving up URLs like Momma used to make!</h4>
          <img src="https://i0.wp.com/68.media.tumblr.com/159d31bca61108d5bd1a8dedf5c14dfe/tumblr_otlasg917I1ql7xb0o6_1280.gif?" />
        </div>
      );
    }
  }

  // About component

class About extends Component {
    render(){
      return(
        <div>
          <h1>About Us</h1>
          <p>We here at the Triple-R love fresh URLs, especially ones tied to awesome React Components.</p>
          <p>It's even better when you can switch between those URLs with ease and share them with friends and family</p>
        </div>
      );
    }
  }

  class Navbar extends Component {
    render(){
      return(
        // <div className="nav">
        //   <Link to="/">Charlotte</Link> | 
        //   <Link to="about">Cary</Link> | 
        //   <Link to="menu">Chicago</Link>
        // </div>
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/">Holes</Link></li> 
            <li><Link to="about">Hunger Games</Link> </li>
            <li><Link to="menu">The Giving Tree</Link></li>
          </ul>
        </div>
      </nav>
      );
    }
  }
  

  class Routes extends Component {
    render(){
      return(
        <Router>
          <div>
            <Navbar />
            <hr />
            <Route name="Home" exact path="/" component={Holes}/>
            <Route name="Menu" path="/menu" component={GivingTree}/>
            <Route name="About" path="/about" component={HungerGames} />
          </div>
        </Router>
      );
    }
  }

ReactDOM.render(<Routes />, document.getElementById('root'));

