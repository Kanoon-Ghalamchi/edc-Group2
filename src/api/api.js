const MOVIE_API_URL = `https://www.omdbapi.com/?apikey=45f0782a`;

export const fetchMovies = (search = "tehran") =>
  fetch(`${MOVIE_API_URL}&s=${search}`).then(response => response.json());