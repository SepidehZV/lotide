const assertArraysEqual = function(actualArr,expectedArr) {
  let count = 0;
  for (let i = 0; i < actualArr.length; ++i) {
    if (actualArr[i] !== expectedArr[i]) {
      count = 1;
    }
  };
  if (count === 0) {
    console.log(`✅✅✅Assertation Passed: ${actualArr} === ${expectedArr}`)
  } else {
    console.log(`🛑🛑🛑Assertation Failed: ${actualArr} !== ${expectedArr}`)
  };
};
//Test Case:
//assertArraysEqual([1,2,3],[2,4]);
//assertArraysEqual([],[]);