// Regular function
function Average(...numbers) {
  return numbers.reduce((total, number) => total + number) / numbers.length
}

// Arrow Function
const Average = (...numbers) => numbers.reduce((total, number) => total + number) / numbers.length