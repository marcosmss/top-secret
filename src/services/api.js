import axios from 'axios';

const api = axios.create({
  baseURL: 'https://create-faststore.herokuapp.com'
});

export default api;
