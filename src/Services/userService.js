import http from "./httpService.js";
import config from "../config.json";

const apiUrl = config.apiUrl;

function register(user) {
  return http.post(apiUrl + "/users", user);
}

function login(user) {
  return http.post(apiUrl + "/auth", user);
}

export { register, login };
