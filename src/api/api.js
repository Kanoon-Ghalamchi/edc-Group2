const MOVIE_API_URL = `https://www.omdbapi.com/?apikey=45f0782a`;

const fetchMovies = (search = "tehran") => 
  fetch(`${MOVIE_API_URL}&s=${search}`).then(response => response.json());


export {
  fetchMovies,
  MOVIE_API_URL,
}