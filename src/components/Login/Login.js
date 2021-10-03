import React from "react"
import "./Login.css"
import calendar from "../calendar/calendar";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Login = props => (
  <LoginForm />
);

 

class LoginForm extends React.Component{
  handleClick = () => {
   if(document.getElementById("username").value==="admin" && 
      document.getElementById("password").value==="admin123")
  {
    <Router>
    <div>
       <Link to="/calendar"></Link>
       <Route path="/calendar" component={calendar} />
    </div>
  </Router>
  }
  }
render(){
  return(
    <div id="loginform">
      <h4 id="headerTitle">LOGIN</h4>
      <div class="row">
  <label>username</label>
  <input id="username" type="text" placeholder="enter username please"/>
</div> 
<div class="row">
  <label>password</label>
  <input id="password" type="text" placeholder="enter password please"/>
</div> 
<div id="button" class="row">
  <button onClick={this.handleClick} id="submit">Login</button>
</div>
    </div>
  )
}
}
export default Login