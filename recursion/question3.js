function factorial(number) {
  if (number === 1 || 0) return 1
  return number * factorial(number -1)
}

const x = factorial(5)
console.log(x)