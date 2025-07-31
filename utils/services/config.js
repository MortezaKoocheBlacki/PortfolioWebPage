import axios from "axios";

const api = axios.create({ baseURL: "https://fakestoreapi.com" });

api.interceptors.response.use(
      (response) => response.data, // getting data
      (error) => Promise.reject(error) // handling error
)

export {api}