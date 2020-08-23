const eqArrays = require('./eqArrays');
//assertArraysEqual function definition
const assertArraysEqual = function(actualArr,expectedArr) {
  if (eqArrays(actualArr,expectedArr)) {
    console.log(`✅✅✅Assertation Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`🛑🛑🛑Assertation Failed: ${actualArr} !== ${expectedArr}`);
  }
};
module.exports = assertArraysEqual;