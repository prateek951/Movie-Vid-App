import http from './httpService';
import config from '../config.json';


export function getMovies() {
    return http.get(config.endpoint + '/movies');;
}


export function getMovie(movieId) {
    return http.get(config.endpoint + '/movies/' + movieId);
}


export function deleteMovie(movieId) {
    return http.delete(config.endpoint + '/movies/' + movieId);
}


export function saveMovie(movie) {
    if(movie._id) {
      const body = {...movie};
      delete body._id;
      return http.put(config.endpoint + '/movies/' + movie._id, body);
    }
    return http.post(config.endpoint + '/movies',movie);
}