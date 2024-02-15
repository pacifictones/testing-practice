const capitalize = require("./capitalize");

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

test("first letter of string is capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
});
