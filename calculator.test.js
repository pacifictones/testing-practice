const calculator = require("./calculator");

test("Addition works well, my friend", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("Subtraction works well too!!", () => {
  expect(calculator.sub(1, 1)).toBe(0);
});

test("It multiplies.", () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});

test("It divides! It divides!", () => {
  expect(calculator.divide(20, 5)).toBe(4);
});
