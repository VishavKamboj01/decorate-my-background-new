import http from "./httpService.js";
import config from "../config.json";

const apiUrl = config.apiUrl;

function getAllReviews() {
  return http.get(apiUrl + "/reviews");
}

function saveReview(review) {
  return http.post(apiUrl + "/reviews", review);
}

export { saveReview, getAllReviews };
