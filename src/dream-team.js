const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let myArr = [];
  // console.log(myArr.length)
  // console.log(null.length)
  if (Array.isArray(members) != true) {
    console.log("nearr")
    return false;
  } else {
    console.log("arr")
  }

  members.forEach(element => {
    if (typeof element != "string") {
      return false;
    }
    else {
      myArr.push(element)
    }
  });
  let result = "";
  if (myArr.length == 0) {
    console.log(1)
    return false;
  }
  else {
    myArr.sort();
    myArr.forEach(element => {
      for (let i = 0; i < element.length; i++) {
        if (element[i] == " ") {
          continue;
          // result += element;
        }
        else {
          result += element[i].toUpperCase()
          break;
        }
      }
    });
  };
  // result.sort()
  // console.log
  let myArr2 = result.split("").sort().join("")
  console.log(myArr2)
  return myArr2
}