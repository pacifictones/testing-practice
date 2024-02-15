const reverse = require("./reverse");

test("String is reversed", () => {
  expect(reverse("hello")).toBe("olleh");
});
