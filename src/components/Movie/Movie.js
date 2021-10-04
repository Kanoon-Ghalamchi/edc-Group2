import React from "react";
import { MOVIE_API_URL } from "../../api/api";


const Movie = ({ movie }) => {

  return (
      <figure className="card">
        <img 
          src={movie.Poster}
          alt={`The movie titled: ${movie.Title}`}
        />
        <figcaption>{movie.Title}</figcaption>  
      </figure> 
  );
};

class MovieDetails extends React.Component {
  state = {
    loadedMovie: null,
  }

  componentDidMount(){
    console.log(this.props);
    fetch(`${MOVIE_API_URL}&i=${this.props.match.params.id}`).then((response) => {
      console.log(response.json());
    });
  }

  render() {

    return (
      <div>
        <br></br><hr></hr>
        <h1>Movie Details: !</h1>
      </div>

    )
  }

}


export {
  Movie,
  MovieDetails,
}