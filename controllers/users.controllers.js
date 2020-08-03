const { fetchAllUsers, fetchUsersByCity } = require("../models/users.models");
const { formatCityName } = require("../utils/formatCityName");
const { filterUsersByCity } = require("../utils/filterUsersByCity");
const { cityCoordinates } = require("../data/cityCoordinates");

const getUsersByCity = async (req, res, next) => {
  const {
    params: { city },
  } = req;
  const formattedCity = formatCityName(city);
  const cityLongLat = cityCoordinates[formattedCity];

  try {
    const allUsers = await fetchAllUsers();
    const listedUsers = await fetchUsersByCity(formattedCity);
    const locationUsers = filterUsersByCity(allUsers, cityLongLat);

    const usersByCity = { users: [...listedUsers, ...locationUsers] };

    res.send(usersByCity);
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsersByCity };
