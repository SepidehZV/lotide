//Without function definition
const without = function(source,itemsToRemove) {
  let output = [...source];
  for (let i = 0; i < itemsToRemove.length; ++i) {
    for (let j = 0; j < output.length; ++j) {
      if (itemsToRemove[i] === output[j]) {
        output.splice(j,1);
        j -= 1;
      }
    }
  }
  return output;
};
module.exports = without;
/*//Test cases:
assertArraysEqual(without([1,2,3],[2]),[1,3]);
assertArraysEqual(without([1,2,3,4,10,0],[2,0]),[1,3,4,10]);
assertArraysEqual(without([1,2,3],[]),[1,2,3]);
assertArraysEqual(without([1,1,3],[1]),[3]);
assertArraysEqual(without([1,2,3],[1,2,3]),[]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);*/