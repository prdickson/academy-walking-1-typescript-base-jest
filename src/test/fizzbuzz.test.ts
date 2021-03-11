import { fizzbuzz } from "../main/fizzbuzz";

describe("fizzbuzz", () => {
  it("returns 1, when given 1", () => {
    const value = fizzbuzz(1);
    expect(value).toEqual(1);
  });

  it.each([[3], [6], [9]])(
    "returns Fizz, when given value is %d",
    (n) => {
      expect(fizzbuzz(n)).toEqual("Fizz");
    }
  );

  it.each([[5], [10], [20]])(
    "returns Buzz, when given value is %d",
    (n) => {
      expect(fizzbuzz(n)).toEqual("Buzz");
    }
  );

  it("returns FizzBuzz, when given value is divisible by 3 and 5", () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
    expect(fizzbuzz(30)).toEqual("FizzBuzz");
  });

});
