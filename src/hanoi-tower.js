const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  let n = Math.pow(2, disksNumber) - 1;
  let skorVsek = turnsSpeed * (1 / 3600);
  // 0.0002777777777778;
  let kolvoSekOtvet = Math.floor(n / skorVsek);
  // console.log(n, kolvoSekOtvet)
  let obj = {};
  obj.turns = n;
  obj.seconds = kolvoSekOtvet;
  return (obj)
};

