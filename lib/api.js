const { default: axios } = require("axios");

const api = axios.create({
  baseURL: process.env.API_URL || "http://127.0.0.1:1337",
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
    common: {
      ["Authorization"]: `Bearer ${process.env.API_TOKEN}`,
    },
  },
});
export default api;
