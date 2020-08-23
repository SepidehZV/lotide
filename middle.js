// Middle ACTUAL FUNCTION
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
module.exports = middle;

