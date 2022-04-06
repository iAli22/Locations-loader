import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    "Accept-language": "en",
    Username: "amitphatak$r5labs.com",
  },
});
