const axios = require("axios");
// Prevents CORS Error during Jest testing
axios.defaults.adapter = require("axios/lib/adapters/http");

const baseURL = "https://bpdts-test-app.herokuapp.com";

const fetchAllUsers = async () => {
  const allUsers = await axios.get(`${baseURL}/users`);
  const { data } = allUsers;

  return data;
};

const fetchUsersByCity = async (city) => {
  const usersByCity = await axios.get(`${baseURL}/city/${city}/users`);
  const { data } = usersByCity;

  return data;
};

module.exports = { fetchAllUsers, fetchUsersByCity };
