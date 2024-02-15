const ceasarCipher = require("./ceasarCipher");

test("Ceaser works...", () => {
  expect(ceasarCipher("abc", 3)).toBe("def");
});

test("Ceaser works for capitals...", () => {
  expect(ceasarCipher("abC", 3)).toBe("deF");
});

test("Ceaser works with wrapped letters...", () => {
  expect(ceasarCipher("abZ", 3)).toBe("deC");
});
