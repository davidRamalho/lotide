const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✌ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(array) {
  return array.slice(1);
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);