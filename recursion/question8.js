function sumSquares(array) {
  if(array.length === 0) return 0;

	let result = 0;
	let first = array.shift();

  if (Array.isArray(first)) {
    result += sumSquares(first)
  } else if (Number.isInteger(first)) {
    result += first* first
  }
  return result + sumSquares(array);

}

const x = sumSquares([10,[[10],10],[10]] )
console.log(x)