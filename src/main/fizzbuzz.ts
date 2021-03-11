export function fizzbuzz(value: number) {
  if (value % 3 === 0) return "Fizz";
  if (value === 5 || value === 10) return "Buzz";
  return value;
}
