/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    result = eval(input.match(/^([0-9./]*)\s*([a-zA-Z]+)$/)[1]);
    if (result === undefined) {result = 1;}
    //******Invalid??
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    result = input.match(/^([0-9./]*)\s*([a-zA-Z]+)$/)[2].toLowerCase();
    var units = ['gal','l','mi','km','lbs','kg']
    if (!units.includes(result)) {result = 'invalid unit'}
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    if (initUnit === "gal") {result = "l";}
    if (initUnit === "lbs") {result = "kg";}
    if (initUnit === "mi") {result = "km";}
    if (initUnit === "l") {result = "gal";}
    if (initUnit === "kg") {result = "lbs";}
    if (initUnit === "km") {result = "mi";}
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    if (unit === "gal") {result = "gallons";}
    if (unit === "lbs") {result = "pounds";}
    if (unit === "mi") {result = "miles";}
    if (unit === "l") {result = "litres";}
    if (unit === "kg") {result = "kilograms";}
    if (unit === "km") {result = "kilometres";}
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    if (initUnit === "gal") {result = initNum * galToL;}
    if (initUnit === "lbs") {result = initNum * lbsToKg;}
    if (initUnit === "mi") {result = initNum * miToKm;}
    if (initUnit === "l") {result = initNum / galToL;}
    if (initUnit === "kg") {result = initNum / lbsToKg;}
    if (initUnit === "km") {result = initNum / miToKm;}
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
