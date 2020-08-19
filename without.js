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
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

const without = function(array1, array2){
  let output = [];
  for (let i = 0; i < array1.length; i++){
    output.push(array1[i]);
  }
  for (let i = 0; i < output.length; i++){
    for (let j = 0 ; j < array2.length; j++){
      if (output[i] === array2[j]){
        output.splice(i,1);
      }
    }
  }
  return output;
};

console.log(without([1, 2, 3, 1], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]))

const words = ["hello", "world", "lighthouse"];

without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(words);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);