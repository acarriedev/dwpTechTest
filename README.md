# DWP Software Engineer Test

API which calls the API at https://bpdts-test-app.herokuapp.com/, and returns people who are listed as either living in London, or whose current coordinates are within 50 miles of London.

---

## Prerequisites

This project is written with JavaScript and runs on Node.

Tested on `Node.js v13.11.0`.

To get started install dependencies with:

```bash
npm install
```

Start the server on port 9045 with:

```bash
npm start
```

---

## Get London Users

The API returns all users listed as living in London or currently located within 50 miles of London. To access these users make a GET request to:

```http
/api/users/london
```

This is a parametric endpoint built to be easily manipulated to return users from different cities if needed in future, but currently works for London as requested.

---

## Built With

- [Node](https://nodejs.org/) - a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/).
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for [Node.js](https://nodejs.org/).
- [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js.
- [Jest](https://jestjs.io/) - JavaScript Testing Framework with a focus on simplicity
- [Supertest](https://www.npmjs.com/package/supertest) - HTTP assertions made easy via [superagent](https://github.com/visionmedia/superagent).
- [Haversine](https://www.npmjs.com/package/haversine) - A simple haversine formula module for Node.js.
- [Nodemon](https://nodemon.io/) - a utility that monitors for changes in source and automatically restarts the server. Used for development.

---

### If you have any questions please feel free to get in touch.
