//Actual Function
const findKeyByValue = function(obj,value) {
  for (let key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
};
module.exports = findKeyByValue;
/*//Test Case
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);*/