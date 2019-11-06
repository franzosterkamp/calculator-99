import { sum, minus, multi, divide } from "./operators";

test("adds 1 + 2 to equal 3", function() {
  expect(sum(1, 2)).toBe(3);
});

test("adds 3 - 2 to equal 1", function() {
  expect(minus(3, 2)).toBe(1);
});

test("adds 3 * 2 to equal 6", function() {
  expect(multi(3, 2)).toBe(6);
});

test("adds 3 : 3 to equal 1", function() {
  expect(divide(3, 3)).toBe(1);
});
