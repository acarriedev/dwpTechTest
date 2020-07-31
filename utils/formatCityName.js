const formatCityName = (cityName) => {
  const capitalisedfirstChar = cityName.charAt(0).toUpperCase();
  const lowerCaseCityName = cityName.toLowerCase();
  const capitalisedCityName = capitalisedfirstChar + lowerCaseCityName.slice(1);

  return capitalisedCityName;
};

module.exports = { formatCityName };
