const palindrome = require("./palindrome");
test("reads same forward and backward", () => {
  const actualValue = palindrome("ama");
  const expectedValue = true;

  expect(actualValue).toBe(expectedValue);
  expect(palindrome("1234321")).toBe(true);
  expect(palindrome("aman")).toBe(false);
  expect(palindrome("amanama")).toBe(false);
});
