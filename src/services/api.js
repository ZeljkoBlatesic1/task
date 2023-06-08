import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Replace with your actual API base URL
  // You can also set other Axios configurations here, such as headers, authentication, etc.
  headers: {
    "Access-Control-Allow-Origin": "*",
  }
});

export default apiClient;