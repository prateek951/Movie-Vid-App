
import http from "./httpService";
import config from '../config.json';

const authendpoint = `${config.endpoint}/auth`;

function AuthEndPoint() {
    return `${authendpoint}`;
}


export function login(email,password) {
    return http.post(AuthEndPoint(),{email,password});
}