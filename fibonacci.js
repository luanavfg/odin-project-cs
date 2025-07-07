// Fibs
function fibs(number){
  if (number === 0) {
    return []
  }
  if (number === 1) {
    return [0]
  }

  const result = [0, 1];

  for (let i=2; i < number; i++) {
    result.push(result[i-1] + result[i-2])
  }

  return result
}
console.log(fibs(8))


// FibsRec
function fibsRec(number){
  if (number === 0) {
    return []
  }
  if (number === 1) {
    return [0]
  }
  if (number === 2) return [0, 1];

  const prev = fibsRec(number - 1);
  const nextNumber = prev[prev.length - 1] + prev[prev.length - 2];

  return [...prev, nextNumber];
}
console.log(fibsRec(8))

// n = 8 -> ANSWER: [0,1,1,2,3,5,8,13]

// prev = fibsRec(7) = [0,1,1,2,3,5,8]
// next = prev[prev.length - 1] + prev[prev.length - 2] =  prev[6] + prev[5] = 13

// n = 7
// prev = fibsRec(6) = [0,1,1,2,3,5]
// next = prev[prev.length - 1] + prev[prev.length - 2] =  prev[5] + prev[4] = 8

// n = 6
// prev = fibsRec(5) = [0,1,1,2,3]
// next = prev[prev.length - 1] + prev[prev.length - 2] =  prev[4] + prev[3] = 5

// n = 5
// prev = fibsRec(4) = [0,1,1,2]
// next = prev[prev.length - 1] + prev[prev.length - 2] =  prev[3] + prev[2] = 3

// n = 4
// prev = fibsRec(3) = [0,1,1]
// next = prev[prev.length - 1] + prev[prev.length - 2] = prev[2] + prev[1] = 2

// n = 3
// prev = fibsRec(2)= [0, 1]
// next = prev[prev.length - 1] + prev[prev.length - 2] = prev[1] + prev[0] = 1
