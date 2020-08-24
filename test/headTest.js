const assertEqual = require('../assertEqual');
const head = require('../head')
const assert = require('chai').assert;

describe("#head", () => {
 
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns undefined for [undefined,6,7]", () => {
    assert.strictEqual(head([undefined,6,7]), undefined); 
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });
 
});