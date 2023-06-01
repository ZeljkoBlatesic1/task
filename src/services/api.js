import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://your-api-base-url.com', // Replace with your actual API base URL
  // You can also set other Axios configurations here, such as headers, authentication, etc.
});

export default apiClient;