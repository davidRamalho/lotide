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

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (const element of keys1) {
      if (Array.isArray(object1[element])) {
        if (eqArrays(object1[element], object2[element]) === false) {
          return false;
        }
      } else {
        if (object1[element] !== object2[element]) {
          return false;
        }
      }
    }
    return true;
  }
};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return console.log(`✌ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`⛔ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ c: "1", d: ["2", 3] }, dc);
module.exports = assertObjectsEqual