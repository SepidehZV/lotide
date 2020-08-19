// TEST/ASSERTION FUNCTIONS
const eqArrays = function(arr1,arr2) {
  for (let i = 0; i < Math.max(arr1.length,arr2.length); ++i) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(actualArr,expectedArr) {
  if (eqArrays(actualArr,expectedArr)) {
    console.log(`✅✅✅Assertation Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`🛑🛑🛑Assertation Failed: ${actualArr} !== ${expectedArr}`);
  }
};

// ACTUAL FUNCTION
const middle = function(array) {
  middleElement = [];
  if(array.length < 3) {
    return middleElement;
  } else if (array.length % 2) {
    middleElement = [array[(array.length - 1) / 2]];
  } else if (!(array.length % 2)) {
    middleElement = [array[array.length / 2 - 1],array[array.length/ 2]];
  }
  return middleElement;
};

// TEST CODE
assertArraysEqual(middle([1,2,3,4,5]),[3]);
assertArraysEqual(middle([2]),[]);
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2]),[]);