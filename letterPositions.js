const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✌ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++){
    const item = sentence[i];
    if (item !== ' '){
      if (!results[item]){
        results[item] = [i];
      } else {
        results[item].push(i);
      }
    }
  }
  return results;
};

console.log(letterPositions('david'))
assertArraysEqual(letterPositions('david').d, [0, 4])