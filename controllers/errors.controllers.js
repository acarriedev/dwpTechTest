const send404 = (req, res, next) => {
  res.status(404).send({ message: "Resource not found." });
};

const handle405s = (req, res, next) => {
  res.status(405).send({ message: "Method not allowed." });
};

const handleCustomErrors = (err, req, res, next) => {
  if (err.status) {
    const { status, message } = err;
    res.status(status).send({ message });
  } else {
    next(err);
  }
};

const handleInternalErrors = (err, req, res, next) => {
  const { message } = err;
  res.status(500).send({ message });
};

module.exports = {
  send404,
  handle405s,
  handleCustomErrors,
  handleInternalErrors,
};
