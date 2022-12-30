function Fibonacci(length) {
  let a = 0,
    b = 1,
    sum = 0
  for (let i = 2; i <= length; i++) {
    sum = a + b
    a = b
    b = sum
  }
  return sum
}