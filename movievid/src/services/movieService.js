import http from './httpService';
import config from '../config.json';

export function getMovies() {
    return http.get(config.movieEndPoint);
}

export function deleteMovie(movieId) {
    return http.delete(config.movieEndPoint + '/' + movieId);
}