import http from "./httpService.js";
import { apiUrl } from "../config.json";

function register(user) {
  return http.post(apiUrl + "/users", user);
}

function login(user) {
  return http.post(apiUrl + "/auth", user);
}

export { register, login };
