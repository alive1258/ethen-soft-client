import { instance as axiosInstance } from "./axiosInstance";

// Function to create a base axios query
export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: process.env.NEXT_PUBLIC_API_URL }) =>
  // Async function to execute the axios query
  async ({ url, method, data, params, headers, contentType }) => {
    console.log(baseUrl + url);
    try {
      // Execute the axios instance with provided parameters
      const result = await axiosInstance({
        // Concatenate baseUrl with provided url
        url: baseUrl + url,
        // HTTP method (GET, POST, PUT, DELETE, etc.)
        method,
        // Data to be sent with the request
        data,
        // URL parameters
        params,

        //headers
        headers: {
          // Set Content-Type header, defaulting to "application/json" if not provided
          "Content-Type": contentType || "application/json",
          ...headers,
        },
        // meta use pagination limit ,pageNumber,totalData
      });
      console.log(data);
      // Ensure to return only the data property
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      // Return error response
      return {
        error: {
          // Extract status code from error response
          status: err.response?.status,
          // Extract error data from error response or use error message
          data: err.response?.data || err.message,
        },
      };
    }
  };
