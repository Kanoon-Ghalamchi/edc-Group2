import React from "react";
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import "./App.css";
import logo from "../logo.png";
import Login from '../Login/Login';
import Movies from "../../container/Movies/Movies";
import {MovieDetails} from "../Movie/Movie";




const App=()=>{

  return (
    <div className="wrapper">
      <img id="logo" src={logo} alt="logo"/>
      <Router>
        <div>
          <Link to="/"><button class="button"><span>Home</span></button></Link>
          <Link to="/Login"><button class="button"><span>Login</span></button></Link>
          <Switch>
            <Route exact path="/" component={Movies} />
            <Route path="/Login" component={Login} />
            <Route exact path="/:id" component={MovieDetails} />
          </Switch>
        </div>
      </Router>
    </div>

  );
}


export default App