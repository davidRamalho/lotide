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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    console.log('keys length check failed');
    return false;
  } else {
    for (const element of keys1) {
      if (Array.isArray(object1[element])) {
        if (eqArrays(object1[element], object2[element]) === false) {
          console.log('eqArrays check failed');
          return false;
        }
      } else {
        if (object1[element] !== object2[element]) {
          console.log('value in at least one of the keys does not match');
          return false;
        } else {
          console.log('values in keys match - YAY');
        }
      }
    }
    return true;
  }
};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd2, dc), false);