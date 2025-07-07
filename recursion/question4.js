function all(array, callback) {
  let result = true

  for (let i=0; i < array.length && result; i++){
    result = callback(array[i])
  }
  return result
}

var allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven); // false