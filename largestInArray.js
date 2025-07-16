function findKthLargest(nums, k) {
  let largestElement = null
  let largestElementPosition = 0

  // [3,2,1,5,6,4]
  let counter = 1
  let i = 0
  while (counter <= k) {
    largestElement = null
    for (i; i < nums.length; i++) {
      if (nums[i] >= largestElement) {
        largestElement = nums[i]
        largestElementPosition = i
      }
    }
    nums.splice(largestElementPosition, 1)

    console.log(nums)
    counter++
    i=0
  }


  return largestElement
};

console.log(findKthLargest([3,9,3,45,2,4,6], 3))