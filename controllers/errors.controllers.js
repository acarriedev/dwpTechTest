exports.send404 = (req, res, next) => {
  res.status(404).send({ message: "Resource not found." });
};

exports.handleInternalErrors = (err, req, res, next) => {
  const { message } = err;
  console.log(message);
  res.status(500).send({ message });
};
