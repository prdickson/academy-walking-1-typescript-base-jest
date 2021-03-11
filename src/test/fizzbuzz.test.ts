import { fizzbuzz } from "../main/fizzbuzz";

describe("fizzbuzz", () => {
  it("returns 1, when given 1", () => {
    const value = fizzbuzz(1);
    expect(value).toEqual(1);
  });

  it("returns fizz, when given 3", () => {
    const value = fizzbuzz(3);
    expect(value).toEqual("Fizz");
  });

  it("returns fizz, when given 6", () => {
    const value = fizzbuzz(6);
    expect(value).toEqual("Fizz");
  });

  it("returns fizz, when given 9", () => {
    const value = fizzbuzz(9);
    expect(value).toEqual("Fizz");
  })

});
