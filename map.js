// Assertation function
/*const eqArrays = function(arr1,arr2) {
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
};*/

//map function
const map = function(array,callback) {
  let result = [];

  for (let item of array) {
    result.push(callback(item));
  } 

  return result;
};


//test case
//const words = ["ground", "control", "to", "major", "tom"];
//const results1 = map(words, word => word[0]);
//console.log(results1);
//assertArraysEqual(results1,['g','c','t','m','t']);
//const result2 = map(words,word => word.length);
//assertArraysEqual(result2,[6,7,2,5,3]);