const { fetchUsersByCity } = require("../models/city.models");

exports.getUsersByCity = (req, res, next) => {
  const { city } = req.params;

  fetchUsersByCity(city)
    .then((data) => {
      const usersByCity = { users: data };

      res.send(usersByCity);
    })
    .catch(next);
};
