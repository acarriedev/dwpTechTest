const { formatCityName } = require("../../utils/formatCityName");

describe("formatCityName()", () => {
  describe("returns city name with first letter capitalised", () => {
    test("returns and empty string when empty string passed", () => {
      expect(formatCityName("")).toBe("");
    });

    test("returns the input string if input string is already correctly formatted", () => {
      expect(formatCityName("London")).toBe("London");
    });

    test("works when input string is all lowercase", () => {
      expect(formatCityName("london")).toBe("London");
    });

    test("works when input string is all uppercase", () => {
      expect(formatCityName("LONDON")).toBe("London");
    });

    test("works when input string is mixed case", () => {
      expect(formatCityName("lOnDoN")).toBe("London");
    });
  });
});
