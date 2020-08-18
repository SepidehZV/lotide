const eqArrays = function(arr1,arr2) {
  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(actualArr,expectedArr) {
  if (eqArrays(actualArr,expectedArr)) {
    console.log(`✅✅✅Assertation Passed: ${actualArr} === ${expectedArr}`)
  } else {
    console.log(`🛑🛑🛑Assertation Failed: ${actualArr} !== ${expectedArr}`)
  }
}
//Test Case:
assertArraysEqual([1,2,3],[2,4]);
assertArraysEqual([],[]);
