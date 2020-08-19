const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`✌ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  middleElements = [];
  if (array.length % 2 === 0){
    middleElements.push(array[(array.length/2) - 1]);
    middleElements.push(array[(array.length/2)]);
  } else {
    middleElements.push(array[Math.floor(array.length/2)]);
  }
  return middleElements;
}

console.log(middle([1, 2, 3, 4, 5, 6]))
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);