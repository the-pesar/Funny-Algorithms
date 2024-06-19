// Regular function
function Average(...numbers: number[]): number {
  return numbers.reduce((total, number) => total + number) / numbers.length
}

// Arrow Function
const Average = (...numbers: number[]): number => numbers.reduce((total, number) => total + number) / numbers.length