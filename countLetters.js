const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✌ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string){
  result = {};
  for (item of string){
    if (result[item]){
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }
  return result;
}

console.log(countLetters('david'));
let test = countLetters('this is a test string')
assertEqual(test['t'], 4);

module.exports = countLetters;