function sumRange(number){
  if (number <=1) {
    return 1
  }
  return number + sumRange(number-1)
}

const x = sumRange(3)
console.log(x)
