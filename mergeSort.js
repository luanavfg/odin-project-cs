// [9, 2, 5, 13, 8, 5, 0, 1]

function mergeSort(array) {
  const arrayLength = array.length
  
  var smallerNum
  var biggestNum
  if (arrayLength === 2) {
    smallerNum = array[0] < array[1] ? array[0] : array[1]
    biggestNum = array[0] < array[1] ? array[1] : array[0]
    
    return [smallerNum, biggestNum]
  }

  // {smallerNum: [smallerNum], biggestNum: [biggestNum]}
  const left = mergeSort(array.slice(0, arrayLength/2)) // [[2],[9]] [2,9] [2]
  console.log('left', left)
  
  const right = mergeSort(array.slice(arrayLength/2, arrayLength)) // [[5],[13]] [5,9]
  console.log('right', right)

  const newLeft = left.pop()
  // console.log('newLeft', newLeft)

  const newRight = right.pop()
  // console.log('newRight', newRight)

  const result = [mergeSort([...left[0], ...right[0]]), mergeSort([...newLeft, ...newRight])]
  
  // console.log(result)
  return result
}
const myArray = [9, 2, 5, 13, 8, 5, 0, 1]
const x = mergeSort(myArray)
console.log(x)