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

const takeUntil = (array, callback) => {
  let result = [];
  for (let item of array){
   if (callback(item)) {
    break;
   } else {
    result.push(item)
   }
  }
  return result;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual([ 1, 2, 5, 7, 2 ], takeUntil(data1, x => x < 0));

module.exports = takeUntil;