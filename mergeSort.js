function mergeSort(array) {
  const arrayLength = array.length
  
  if (array.length ===1) {
    return [array[0]]
  }

  const left = mergeSort(array.slice(0, arrayLength/2)) 
  const right = mergeSort(array.slice(arrayLength/2, arrayLength))

  const result = [];
  let i = 0;
  let j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

const myArray =   [9, 2, 5, 13, 8, 4, 0, 1]
const finalMerge = mergeSort(myArray)
console.log(finalMerge)