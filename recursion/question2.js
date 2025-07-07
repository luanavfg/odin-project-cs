function power(number, exp) {
  if (exp === 0 || number === 1) {
    return 1
  }
  if (exp === 1) {
    return number
  }
  return number * power(number, exp-1)
}

const x = power(5,2)
console.log(x)