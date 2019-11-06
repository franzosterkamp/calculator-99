import { sum, minus, multi, divide, countDigits } from "./operators";

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

test("count digits of 213", function() {
  const result = countDigits(213);
  expect(result).toBe(3);
});

test("count digits of 3129823", function() {
  const result = countDigits(3129823);
  expect(result).toBe(7);
});

test("count digits of -231", function() {
  const result = countDigits(-231);
  expect(result).toBe(4);
});

test("count digits of 0", function() {
  const result = countDigits(0);
  expect(result).toBe(1);
});
