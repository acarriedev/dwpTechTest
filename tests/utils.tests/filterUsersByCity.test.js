const { filterUsersByCity } = require("../../utils/filterUsersByCity");
const { testUsers } = require("../../data/testUsers");
const { cityCoordinates } = require("../../data/cityCoordinates");

describe("filterUsersByCity()", () => {
  describe("doesn't mutate input", () => {
    test("doesn't mutate input users array", () => {
      const filteredUsers = filterUsersByCity(
        testUsers,
        cityCoordinates["London"]
      );

      expect(filteredUsers).not.toBe(testUsers);
      expect(testUsers).toEqual([
        {
          id: 1,
          first_name: "Paul",
          last_name: "Smith",
          email: "paulpsmith99@email.com",
          ip_address: "192.57.232.112",
          latitude: 34.003135,
          longitude: -117.7228641,
        },
        {
          id: 2,
          first_name: "Brenda",
          last_name: "Brown",
          email: "itisbrenda@email.co.uk",
          ip_address: "4.185.73.83",
          latitude: 51.4703,
          longitude: -0.0674,
        },
        {
          id: 3,
          first_name: "Sarah",
          last_name: "Doe",
          email: "s.doe2@email.com",
          ip_address: "21.243.184.215",
          latitude: "51.505554",
          longitude: "-0.075278",
        },
      ]);
    });

    test("doesn't mutate input user objects", () => {
      const filteredUsers = filterUsersByCity(
        testUsers,
        cityCoordinates["London"]
      );

      filteredUsers.forEach((user, index) => {
        expect(user).not.toBe(testUsers[index]);
      });
    });
  });

  describe("returns an array of user objects filtered by the inputted city coordinates", () => {
    test("returns an empty array when no users in the input array", () => {
      expect(filterUsersByCity([], cityCoordinates["London"])).toEqual([]);
    });

    test("returns an empty array when no users match input city coordinates", () => {
      expect(filterUsersByCity(testUsers, cityCoordinates["Glasgow"])).toEqual(
        []
      );
    });
  });
});
