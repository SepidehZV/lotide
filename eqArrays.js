//eqArrays function definition
const eqArrays = function(arr1,arr2) {
  for (let i = 0; i < Math.max(arr1.length,arr2.length); ++i) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
module.exports = eqArrays;

