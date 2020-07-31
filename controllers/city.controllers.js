const { fetchUsersByCity } = require("../models/city.models");
const { formatCityName } = require("../utils/formatCityName");

exports.getUsersByCity = (req, res, next) => {
  const { city } = req.params;

  const formattedCity = formatCityName(city);

  fetchUsersByCity(formattedCity)
    .then((data) => {
      const usersByCity = { users: data };

      res.send(usersByCity);
    })
    .catch(next);
};
