exports.send404 = (req, res, next) => {
  res.status(404).send({ message: "Resource not found." });
};

exports.handle405s = (req, res, next) => {
  res.status(405).send({ message: "Method not allowed." });
};

exports.handleInternalErrors = (err, req, res, next) => {
  const { message } = err;
  console.log(message);
  res.status(500).send({ message });
};
