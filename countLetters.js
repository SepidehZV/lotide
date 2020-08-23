const { countLetter } = require(".");

//Actual Function
const countLetters = function(str) {
  const results = {};

  for (let letter of str) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter]++;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};
module.exports = countLetters;

/*//Test Case
const sentence = "acb def abc";
const test1 = countLetters(sentence);
assertEqual(test1["a"],2);
assertEqual(test1["b"],2);
assertEqual(test1["c"],2);
assertEqual(test1["d"],1);
assertEqual(test1["e"],1);
assertEqual(test1["f"],1);
assertEqual(test1["g"],undefined);*/