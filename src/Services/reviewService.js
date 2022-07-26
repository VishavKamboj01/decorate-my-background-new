import http from "./httpService.js";
import { apiUrl } from "../config.json";

function getAllReviews() {
  return http.get(apiUrl + "/reviews");
}

function saveReview(review) {
  return http.post(apiUrl + "/reviews", review);
}

export { saveReview, getAllReviews };
