import axios from "axios";

const staticServerUri = process.env.REACT_APP_PATH || "";

// instance
export const instance = axios.create({
  baseURL: staticServerUri + "/api",
  headers: { "Content-Type": "application/json" },
  timeout: 1000 * 5,
});

// middleware
instance.interceptors.request.use(
  (config) => {
    const jwt = localStorage.getItem("token");
    if (jwt) config.headers["Authorization"] = jwt;
    return config;
  },
  (error) => {
    console.err(`[API REQEST ERROR] ${error}`);
    console.dir(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.dir(response);
    return response;
  },
  (error) => {
    console.log(`[API RESPONSE ERROR] ${error}`);
    console.dir(error);
    return Promise.reject(error);
  }
);
