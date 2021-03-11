import { fizzbuzz } from "../main/fizzbuzz";

describe("fizzbuzz", () => {
  it("returns 1, when given 1", () => {
    const value = fizzbuzz(1);
    expect(value).toEqual(1);
  });

  it("returns fizz, when given value is divisible by 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
    expect(fizzbuzz(6)).toEqual("Fizz");
    expect(fizzbuzz(9)).toEqual("Fizz");
  });

  it.each([[5, 10, 20]], "returns buzz, when given value is divisible by 5", (n) => {
    expect(fizzbuzz(n)).toEqual("Buzz");
  });

  it("returns buzz, when given value is divisible by 5", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
    expect(fizzbuzz(10)).toEqual("Buzz");
    expect(fizzbuzz(20)).toEqual("Buzz");
  });

});
