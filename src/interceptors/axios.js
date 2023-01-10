import axios from "axios";


axios.defaults.baseURL = "https://localhost:7257/api/";

let refresh = false;

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;
      const response = await axios.post(
        "Auth/refresh",
        {},
        { withCredentials: true }
      );

      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data}`;
        console.log('get interceptored');
        return axios(error.config);
      }
    }
    refresh = false;
    return error;
  }
);
