function contains(nestedObject, searchValue){
  if (typeof nestedObject !== "object" || nestedObject === null) {
    return nestedObject === searchValue;
  }

  for (const value of Object.values(nestedObject)) {
     if (contains(value, searchValue)) {
      return true;
    }
  };

  return false;
}

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2'
          }
        }
      }
    }
  }
}

const hasIt = contains(nestedObject, 44); // true
const doesntHaveIt = contains(nestedObject, "foo"); // false

console.log(hasIt)
console.log(doesntHaveIt)