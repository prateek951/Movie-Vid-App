import jwtDecode from 'jwt-decode';
import http from "./httpService";
import config from '../config.json';
const authendpoint = `${config.endpoint}/auth`;
const AUTH_TOKEN = "token";


//Getting rid of the bidirectional dependencies 

http.setJwt(getJWT());

function AuthEndPoint() {
    return `${authendpoint}`;
}

export async function login(email,password) {
  const {data: token } = await http.post(AuthEndPoint(),{email,password});
  //Set the token to the localStorage 
  localStorage.setItem(AUTH_TOKEN,JSON.stringify(token));
}

export function loginWithJWT(token) {
    localStorage.setItem(AUTH_TOKEN,token);
}

export function logout() {
    localStorage.removeItem(AUTH_TOKEN); 
}

export function getCurrentUser() {
    try {
        const token = JSON.parse(localStorage.getItem(AUTH_TOKEN));
        const decoded = jwtDecode(token);
        return decoded;
      } catch (error) {
          return null;
      }
}

export function getJWT() {
    return localStorage.getItem(AUTH_TOKEN);
}


export default {
    login,
    logout,
    getCurrentUser,
    loginWithJWT,
    getJWT
}