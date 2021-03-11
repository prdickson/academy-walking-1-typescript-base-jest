import { fizzbuzz } from "../main/fizzbuzz";

describe("fizzbuzz", () => {
  it("returns the given value", () => {
    const value = fizzbuzz(1);
    expect(value).toEqual(1);
  });
});
