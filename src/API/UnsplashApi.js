import axios from "axios";

const API_KRY = "SL4deQP2D6z451ANBA1TUCBAgeBs0U3OMlR__Hjonpo";
const BASE_URL = "https://api.unsplash.com";
export const searchImage = async (query, page) => {
  const option = new URLSearchParams({
    query,
    page: page,
    per_page: 10,
    client_id: API_KRY,
    orientation: "landscape",
  });
  const response = axios.get(`${BASE_URL}/search/photos?${option}`);
  return response;
};
