//Actual Function
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};
module.exports = letterPositions;

/*//Test Case
const test1 = "hello";
const result1 = letterPositions(test1);
assertArraysEqual(result1["h"],[0]);
assertArraysEqual(result1["e"],[1]);
assertArraysEqual(result1["l"],[2,3]);
assertArraysEqual(result1["o"],[4]);*/