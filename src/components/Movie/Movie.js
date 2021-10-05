import React from "react";
import { MOVIE_API_URL } from "../../api/api";
import "./MovieDetailsStyle.css";


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
    poster: null,
    title: null,
    type: null,
    genre: null,
    writer: null,
    director: null,
    actors: null,
    country: null,
    language: null,
    released: null,
    runtime: null,
    plot: null,
  }

  componentDidMount(){
    console.log(this.props);
    fetch(`${MOVIE_API_URL}&i=${this.props.match.params.id}`).then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          poster : data.Poster,
          title: data.Title,
          type: data.Type,
          genre: data.Genre,
          writer: data.Writer,
          director: data.Director,
          actors: data.Actors,
          country: data.Country,
          language: data.Language,
          released: data.Released,
          runtime: data.Runtime,
          plot: data.Plot,
        })
      });
  }

  render() {

    return (
      <div>
        <h2><strong>Reservation</strong></h2>
        <div className="movie-details">
          <img src={this.state.poster}/>
          <h1> Title: {this.state.title} </h1>
          <h1> Type: {this.state.type} </h1>
          <h1> Genre: {this.state.genre} </h1>
          <h1> Writer: {this.state.writer} </h1>
          <h1> Director: {this.state.director} </h1>
          <h1> Actors: {this.state.actors} </h1>
          <h1> Country: {this.state.country} </h1>
          <h1> Language: {this.state.language} </h1>
          <h1> Released: {this.state.released} </h1>
          <h1> Runtime: {this.state.runtime} </h1>
          <h1> Plot: {this.state.plot} </h1>
        </div>
      </div>
    )
  }

}


export {
  Movie,
  MovieDetails,
}