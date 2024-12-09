/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("../sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("given an empty array, returns 0", () => {
  expected(sum([])).toBe(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with just one number", () => {
  expected(sum([20])).toBe(20);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array containing negative numbers", () => {
  expected(sum([-3, -7, 0, 2])).toBe(-8);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal or float numbers", () => {
  expected(sum([6.5, 2.1, 0.5])).toBe(9.1);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array containing non-number values", () => {
  expected(sum(["hi", "hello", 9, 2])).toBe(11);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values", () => {
  expected(sum(["hi", null, undefined])).toBe(
    "Please provide numerical values"
  );
});
