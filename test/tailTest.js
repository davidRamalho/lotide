const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert.deepEqual;

describe("#tail", () => {
 
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  
});