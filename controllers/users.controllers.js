const { fetchUsersByCity } = require("../models/users.models");
const { formatCityName } = require("../utils/formatCityName");

const getUsersByCity = (req, res, next) => {
  const { city } = req.params;

  const formattedCity = formatCityName(city);

  fetchUsersByCity(formattedCity)
    .then((data) => {
      const usersByCity = { users: data };

      res.send(usersByCity);
    })
    .catch(next);
};

module.exports = { getUsersByCity };
