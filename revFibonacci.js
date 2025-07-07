function reverseFibonacci(num) {
  let array = [];

  // Adding the first and second elements
  array[0] = 0;
  array[1] = 1;

  for (let i = 2; i < num; i++) {
    // Storing sum as the current element
    array[i] = array[i - 2] + array[i - 1];
  }

  // reversing the array as we want the reversed order.
  array.reverse();

  return array;
}

var num = 5;
answer = reverseFibonacci(num);