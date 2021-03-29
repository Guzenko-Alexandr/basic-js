const CustomError = require("../extensions/custom-error");





module.exports = class DepthCalculator {

  current = 1;
  maxdepth = 1;
  calculateDepth(arr) {

    arr.forEach(element => {
      console.log(this.current)
      if (Array.isArray(element)) {
        this.current++;
        if (this.maxdepth < this.current) {
          this.maxdepth = this.current;
        }
        this.calculateDepth(element)
      }
    });
    this.current--
    if (this.current == 0) {
      console.log(this.maxdepth)
      return this.maxdepth;
    }
  }

}