//map function
const map = function(array,callback) {
  let result = [];

  for (let item of array) {
    result.push(callback(item));
  } 

  return result;
};
module.exports = map;

//test case
//const words = ["ground", "control", "to", "major", "tom"];
//const results1 = map(words, word => word[0]);
//console.log(results1);
//assertArraysEqual(results1,['g','c','t','m','t']);
//const result2 = map(words,word => word.length);
//assertArraysEqual(result2,[6,7,2,5,3]);