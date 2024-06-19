function Fibonacci(length: number): number {
  let a: number = 0,
    b: number = 1,
    sum: number = 0
  for (let i = 2; i <= length; i++) {
    sum = a + b
    a = b
    b = sum
  }
  return sum
}