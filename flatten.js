const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return console.log(`✌ Assertion Passed: ${array1} === ${array2}`);
  } else {
    return console.log(`⛔ Assertion Failed: ${array1} !== ${array2}`);
  }
};

//check if all elements within the array are arrays themselves
const checkIfArrays = function(element){
  if (Array.isArray(element)){
    return true;
  } else {
    return false;
  }
}

// create flatten function which takes an array as an argument and extracts elements from nested arrays
const flatten = function(array){
  let newArray = [];
  for (let i = 0 ; i < array.length ; i++){
    if (checkIfArrays(array[i])) {
      for (let j = 0 ; j < array[i].length ; j++){
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
} 
console.log(flatten([1, 2, [3, 4], 5, [6]]))
console.log(flatten([1, 'test', [3, 4], 5, [6, 'car', true]]))

module.exports = flatten;