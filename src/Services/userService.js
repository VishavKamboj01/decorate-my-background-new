import http from "./httpService.js";

const apiEndpoint = "http://localhost:3000/api";

function register(user) {
  return http.post(apiEndpoint + "/users", user);
}

function login(user) {
  return http.post("http://localhost:3000/api/auth", user);
}

export { register, login };
