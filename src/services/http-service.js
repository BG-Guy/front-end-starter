import Axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "production" ? API_KEY : "//localhost:3030/api/";
// const BASE_URL = (process.env.NODE_ENV !== 'development') ? '/api/' : '//localhost:3030/api/'
const API_KEY = "https://free-to-play-games-database.p.rapidapi.com/api/games";
var axios = Axios.create({
  withCredentials: true,
});

export const httpService = {
  get(endpoint, data) {
    return ajax(endpoint, "GET", data);
  },
  post(endpoint, data) {
    return ajax(endpoint, "POST", data);
  },
  put(endpoint, data) {
    return ajax(endpoint, "PUT", data);
  },
  delete(endpoint, data) {
    return ajax(endpoint, "DELETE", data);
  },
};

async function ajax(endpoint, method = "GET", data = null) {
  try {
    const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      params: method === "GET" ? data : null,
    });
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(
      `Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`
    );
    console.dir(err);
    if (err.response && err.response.status === 401) {
      // window.location.assign('/login')
      console.log("hhtp service cant get", endpoint);
    }
    throw err;
  }
}
