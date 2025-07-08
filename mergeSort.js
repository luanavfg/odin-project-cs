// [3, 2, 1, 13, 8, 5, 0, 1]

function mergeSort(array) {
  const arrayLength = array.length
  
  var smallerNum
  var biggestNum
  if (arrayLength === 2) {
    smallerNum = array[0] < array[1] ? array[0] : array[1]
    biggestNum = array[0] < array[1] ? array[1] : array[0]
    return [smallerNum]
  }

  if (array.length === 1) {
    return array
  }

  const left = mergeSort(array.slice(0, arrayLength/2))
  const right = mergeSort(array.slice(arrayLength/2, arrayLength))
  
  const result = [...mergeSort([left[0], right[0]]), ...mergeSort([left[1], right[1]])]
  console.log(result)
}
const myArray = [9, 2, 5, 13, 8, 5, 0, 1]
mergeSort(myArray)