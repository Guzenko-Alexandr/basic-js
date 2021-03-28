const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
   if (Array.isArray(arr) != true) {

      return err._validationProp === 'NA'
   }
   // let myArr = [];
   let myArr = JSON.parse(JSON.stringify(arr))
   // arr.forEach(element => {
   //    // if (typeof element == "object") {
   //    //    element.forEach
   //    // }
   //    myArr.push(element);
   // });
   // let myArr = _.cloneDeep(value)
   // myNewArr = [];
   let counter = 0;
   // myArr.forEach(element => {

   //    myNewArr.push(element);
   // });
   let myNewArr = JSON.parse(JSON.stringify(myArr))
   console.log(myNewArr)
   counter = 0;
   myArr.forEach(element => {
      // if (Number.isNaN(element)) {
      //    delete myNewArr[counter];
      // }
      if (isFinite(element) != true) {
         delete myNewArr[counter];
      }
      if (element == "--discard-next") {
         delete myNewArr[counter];
         delete myNewArr[counter + 1];

      }
      if (element == "--discard-prev") {
         delete myNewArr[counter - 1];
         delete myNewArr[counter]
         // delete myNewArr[counter];
      }
      if (element == '--double-next') {
         myNewArr[counter] = myNewArr[counter + 1];
         // delete myNewArr[counter]
         // delete myNewArr[counter];
      }
      if (element == "--double-prev") {
         // delete myNewArr[counter];
         if (myNewArr[counter - 1] == undefined) {
            delete myNewArr[counter];
         } else {
            myNewArr[counter] = myNewArr[counter - 1];
         }
      }
      // console.log(`${counter} 222`)
      counter++;

   });

   let result = [];
   counter = 0;
   let pizdanutaya = 0;
   let esheOdinArr = JSON.parse(JSON.stringify(myNewArr))
   console.log(esheOdinArr)
   esheOdinArr.forEach(element => {
      // console.log(element)
      // if (element == undefined) {

      // if (typeof +element == typeof 1) {
      // } else
      // {
      //    if (isNaN(element) == true) {
      //       console.log(1111)
      //    }
      //    else { result.push(element); }
      // }
      // }

      // }
      // || isNaN(element)
      if (element == undefined || Number.isNaN(element)) {
         console.log(element)
         myNewArr.splice(counter, 1)
         counter--
      }
      counter++
      // console.log(12)
   });
   console.log(myNewArr)
   return myNewArr
};
