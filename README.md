# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @davidramalho/lotide`

**Require it:**

`const _ = require('@davidramalho/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns the head element of an array;
* `tail(...)`: returns the tail elements of an array;
* `middle(...)`: returns the middle elements of an array;
* `eqArrays(...)`: returns a boolean value when comparing two arrays;
* `countLetters(...)`: returns the total # of times a character is found in a string;
* `countOnly(...)`: returns a count for #of times a string is found in an array. Only counts if that string is set to be counted;
* `eqObjects(...)`: returns a boolean value when comparing two objects;
* `findKey(...)`: returns a key by iterating over an object and checking it against a callback;
* `findKeyByValue(...)`: returns key that matches value;
* `flatten(...)`: returns a flattened array when an array with nested arrays is inputed;
* `letterPositions(...)`: returns the index of a character in a string;
* `map(...)`: returns a new array based on properties set by the callback function;
* `takeUntil(...)`: takes elements from an array until a conditional is met;
* `without(...)`: returns a new array without undesirable elements from the input array;