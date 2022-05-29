import http from "./httpService.js";

const apiEndpoint = "http://localhost:3000/api";

function getAllReviews() {
  return http.get(apiEndpoint + "/reviews");
}

function saveReview(review) {
  return http.post(apiEndpoint + "/reviews", review);
}

export { saveReview, getAllReviews };
