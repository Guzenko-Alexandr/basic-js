const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string" || typeof +sampleActivity != "number") {
    return false
  }
  if (sampleActivity == undefined) {
    return false
  }
  let dol = sampleActivity.trim();
  console.log(dol)
  if (dol / dol != 1 || dol.length == 0) {
    return false
  }
  // console.log(sampleActivity.trim().length)
  // if (sampleActivity.trim().length == 0) {
  // return false
  // }

  if (+sampleActivity == "NaN") {
    // console.log(NaN);
    return false;
  }

  if (typeof sampleActivity == typeof 1 || sampleActivity <= 0 || sampleActivity > 15) {
    // console.log(false);
    return false;
  }
  // console.log(1);
  if (typeof +sampleActivity == typeof 1 || sampleActivity != Infinity) {
    // console.log("ok")
    // if (sampleActivity < 0) {
    //   let res1 = Math.log(MODERN_ACTIVITY / Math.abs(sampleActivity));
    //   let del = Math.pow(10, -4);
    //   let res = res1 / (0.693 / HALF_LIFE_PERIOD);
    //   otvet = Math.ceil(res);
    //   console.log(+`-${otvet}`)
    //   return +`-${otvet}`
    // } else {
    let res1 = Math.log(MODERN_ACTIVITY / sampleActivity);
    let del = Math.pow(10, -4);
    let res = res1 / (0.693 / HALF_LIFE_PERIOD);
    console.log(Math.ceil(res))
    if (res == Infinity || res < 0) {
      // console.log(false);
      return false;
    }
    return Math.ceil(res)
    // }
  }
  else { return false }
};