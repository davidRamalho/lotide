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

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

const animals = ['dog', 'cat', 'dolphin', 'whale', 'cow']
const rockBands = ['Metallica', 'Iron Maiden', 'Nirvana', 'Queen']
const primeNumbers = [3, 7, 5, 11, 17]

assertArraysEqual(animals, map(animals, x => x))
assertArraysEqual(['M', 'I', 'N', 'Q'], map(rockBands, x => x[0]))
assertArraysEqual([3+1, 7+1, 5+1, 11+1, 17+1], map(primeNumbers, x => x+1))

module.exports = map;