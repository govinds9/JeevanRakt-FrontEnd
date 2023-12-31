import axios from "axios";
import { BASE_URL } from "./helper";

const Api = axios.create({ baseURL: BASE_URL });

Api.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export default Api;
