const haversine = require("haversine");

const filterUsersByCity = (users, cityCoordinates) => {
  const filteredUsers = users.filter((user) => {
    const { latitude, longitude } = user;
    return haversine(
      cityCoordinates,
      { latitude, longitude },
      { threshold: 50, unit: "mile" }
    );
  });

  return filteredUsers;
};

module.exports = { filterUsersByCity };
