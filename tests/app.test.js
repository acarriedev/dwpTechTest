const app = require("../app");
const request = require("supertest");

describe("Tests app routes", () => {
  test("status: 404 responds with 'Resource not found.' if page doesn't exist on all request methods", () => {
    const invalidMethods = ["get", "post", "patch", "put", "delete"];
    const invalidRequests = invalidMethods.map((method) => {
      return request(app)
        [method]("/incorrect_path")
        .expect(404)
        .then(({ body: { message } }) => {
          expect(message).toBe("Resource not found.");
        });
    });
    return Promise.all(invalidRequests);
  });
});
