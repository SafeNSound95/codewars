"use strict";

// Solution 1 with an object literal:

const circular = {
  value: "Hello World",
};

circular.self = circular;
console.log(circular.self.self.self);

console.log(circular.value);
console.log(circular.self.value);
console.log(circular.value === circular.self.value);

// Solution 2 with classes:

class Circular {
  constructor() {
    this.value = "Hello World";
    this.self = this;
  }
}

const circular2 = new Circular();

console.log(circular2);

// Solution 3 with get

const circular3 = {
  value: "Hello World",
  get self() {
    return this;
  },
};

console.log(circular3.self);

// Refresher on how setters and getters work.
const obj = {
  set val(val) {
    this._val = val;
  },

  get val() {
    return this._val;
  },
};

obj.val = 3;
console.log(obj.val);
