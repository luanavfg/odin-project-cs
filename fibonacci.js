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