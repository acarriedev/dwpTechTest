const axios = require("axios");
// Prevents CORS Error during Jest testing
axios.defaults.adapter = require("axios/lib/adapters/http");

const baseURL = "https://bpdts-test-app.herokuapp.com";

const fetchUsersByCity = (city) => {
  return axios.get(`${baseURL}/city/${city}/users`).then(({ data }) => {
    return data;
  });
};

module.exports = { fetchUsersByCity };
