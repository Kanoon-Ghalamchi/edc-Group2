import React, { useEffect, useReducer, Fragment} from "react";
import {Link} from "react-router-dom";
import { initialState, reducer } from "./reducer";
import { fetchMovies } from "../../api/api";
import {Movie} from "../../components/Movie/Movie";


const Movies=() => {
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
    <Fragment>
        <h2><strong>Movies</strong></h2>
        <div className="cards">
        {loading && <span>loading...</span>}
        {errorMessage && <span>{errorMessage}</span>}
        {movies && movies.map((movie, index) => (
            <Link to={`/${movie.imdbID}`} key={movie.imdbID} >
                <Movie movie={movie} />
            </Link>
            )
        )
        }
        </div>
    </Fragment>
  );

}

export default Movies;