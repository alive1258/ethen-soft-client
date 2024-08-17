import axios from "axios";

// Create an instance of axios
const instance = axios.create();

// Set default headers for POST requests to specify content type as JSON
instance.defaults.headers.post["Content-Type"] = "application/json";

// Set default headers to specify that the client accepts JSON responses
instance.defaults.headers["Accept"] = "application/json";

// Set a default timeout of 60 seconds for all requests
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    //TODO:  Do something before request is sent

    return config;
  },
  function (error) {
    //TODO: Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx causes this function to trigger
    const responseObject = {
      statusCode: error?.response?.status || 500,
      message: error?.response?.data?.message || "Something went wrong!",
    };
    return Promise.reject(responseObject);
  }
);
export { instance };
