import axios from "axios";

const API_KRY = "SL4deQP2D6z451ANBA1TUCBAgeBs0U3OMlR__Hjonpo";
const BASE_URL = "https://api.unsplash.com";
export const searchByQuery = async (query) => {
  const option = new URLSearchParams({
    query,
    per_page: 30,
    client_id: API_KRY,
    orientation: "landscape",
  });
  const response = axios.get(`${BASE_URL}/search/photos?${option}`);
  return response;
};

export const searchByPage = async (query, page) => {
  const option = new URLSearchParams({
    query,
    per_page: 30,
    page,
    client_id: API_KRY,
    orientation: "landscape",
  });
  const response = axios.get(`${BASE_URL}/search/photos?${option}`);
  return response;
}
