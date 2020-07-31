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

  describe("/users", () => {
    describe("/city", () => {
      describe("/london - GET request retrieves users listed as living in London", () => {
        test("status: 200 returns an array of users", () => {
          return request(app)
            .get("/api/users/city/london")
            .expect(200)
            .then(({ body }) => {
              expect(body).toHaveProperty("users");
              expect(Array.isArray(body.users)).toBe(true);
            });
        });

        test("status: 200 each of the users all have listed properties - id, first_name, last_name, email, ip_address, latitude, longitude", () => {
          return request(app)
            .get("/api/users/city/london")
            .expect(200)
            .then(({ body: { users } }) => {
              users.forEach((user) => {
                const userProperties = Object.keys(user);
                expect(userProperties).toEqual(
                  expect.arrayContaining([
                    "id",
                    "first_name",
                    "last_name",
                    "email",
                    "ip_address",
                    "latitude",
                    "longitude",
                  ])
                );
              });
            });
        });

        test("status: 200 returns ALL users listed as living in London", () => {
          return request(app)
            .get("/api/users/city/london")
            .expect(200)
            .then(({ body: { users } }) => {
              expect(users.length).toBe(6);
            });
        });

        test("status: 200 returns all users regardless of the case London string is formatted in", () => {
          const londonCases = ["London", "london", "LONDON", "lOnDoN"];
          const caseRequests = londonCases.map((londonCase) => {
            return request(app)
              .get(`/api/users/city/${londonCase}`)
              .expect(200)
              .then(({ body: { users } }) => {
                expect(users.length).toBe(6);
              });
          });
          return Promise.all(caseRequests);
        });
      });

      test("INVALID METHODS", () => {
        const invalidMethods = ["post", "patch", "put", "delete"];
        const requests = invalidMethods.map((method) => {
          return request(app)
            [method]("/api/users/city/london")
            .expect(405)
            .then(({ body: { message } }) => {
              expect(message).toBe("Method not allowed.");
            });
        });

        return Promise.all(requests);
      });
    });
  });
});
