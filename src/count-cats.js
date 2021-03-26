const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let newArray = matrix.flat(3);
  console.log(newArray)
  let counter = 0;
  newArray.forEach(element => {
    if (element == "^^") {
      counter++
    }
  });
  return counter;
};
