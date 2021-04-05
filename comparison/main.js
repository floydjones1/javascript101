// Equality checks in JS
var _ = require("lodash");

// primative values
// numbers, booleans, string
// const var1 = 0;
// const var2 = false;

// console.clear();
// console.log(`var1 === var2 ${var1 === var2}`);

// reference types
// object, arrays
// const var1 = {
//   hello: "world",
//   bye: {
//     good: "world",
//   },
// };
// const var2 = {
//   hello: "world",
//   bye: {
//     good: "world",
//   },
// };
// var2.bye = var1.bye;

// console.clear();
// console.log(var1, var2);
// console.log(`var1 === var2 ${var1.bye === var2.bye}`);

const var1 = {
  hello: "world",
  bye: {
    good: "world",
  },
};
const var2 = {
  bye: {
    good: "world",
  },
  hello: "world",
};

console.clear();
console.log(var1, var2);
console.log(`var1 === var2 ${_.isEqual(var1, var2)}`);
