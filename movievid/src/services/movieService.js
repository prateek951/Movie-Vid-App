import http from './httpService';
import config from '../config.json';

const apiUrl = config.endpoint + '/movies/';

function getMovieUrlIfId(movieId) {
    return `${apiUrl}${movieId}`;
}


export function getMovies() {
    return http.get(apiUrl);
}


export function getMovie(movieId) {
    return http.get(getMovieUrlIfId(movieId));
}

export function deleteMovie(movieId) {
    return http.delete(getMovieUrlIfId(movieId));
}


export function saveMovie(movie) {
    if(movie._id) {
      const body = {...movie};
      delete body._id;
      return http.put(getMovieUrlIfId(movie._id), body);
    }
    return http.post(apiUrl,movie);
}