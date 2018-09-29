import http from "./httpService";
import config from '../config.json';

function getGenreEndPoint() {
    return `${config.endpoint}/genres`
}


export function getGenres() {
    return http.get(getGenreEndPoint());
}