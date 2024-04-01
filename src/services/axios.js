import axios from 'axios';

class AxiosConfig {
  constructor(path) {
    this.axios = axios.create(
      {
        baseURL: `http://localhost:3000/api/${path}`
      }
    );
  }
  getToken() {
    return (localStorage.getItem("token"))
  }
}

export  default AxiosConfig;