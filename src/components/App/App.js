import React, { useEffect, useReducer} from "react";
import { initialState, reducer } from "./reducer";
import { fetchMovies } from "../../api/api";
import Movie from "../Movie/Movie";
import "./App.css";
import logo from "../logo.png";
import Login from '../Login/Login';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';



const App=()=>{
    const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchMovies().then(jsonResponse => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: jsonResponse.Search
      });
    });
  }, []);

  const { movies, errorMessage, loading } = state;
   
 

  return (
    <div className="wrapper">
      <img id="logo" src={logo}/>
      <Router>
      <div>
         <Link to="/Login"> <button class="button"><span><a href="#">Login</a></span></button></Link>
         <Route path="/Login" component={Login} />
      </div>
    </Router>
       
         
      <h2>
        <strong>Movies</strong>
      </h2>
      <div className="cards">
        {loading && <span>loading...</span>}
        {errorMessage && <span>{errorMessage}</span>}
        {movies &&
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))}
      </div>
    </div>

  );
}
export default App