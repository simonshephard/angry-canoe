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
    result = input.match(/^([0-9./]*)\s*([a-zA-Z]+)$/)[1];
    if (result === "") {result = "1";}
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    result = input.match(/^([0-9./]*)\s*([a-zA-Z]+)$/)[2].toLowerCase();
    var initUnits = ['gal','l','mi','km','lbs','kg'];
    var index = initUnits.indexOf(result);
    if (index === -1) {
      result = 'invalid unit';
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    var initUnits = ['gal','l','mi','km','lbs','kg'];
    var returnUnits = ['l','gal','km','mi','kg','lbs'];
    var index = initUnits.indexOf(initUnit);
    if (index === -1) {
      result = 'invalid unit';
    } else {
      result = returnUnits[index];
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    var shortUnits = ['gal','l','mi','km','lbs','kg'];
    var longUnits = ['gallons','litres','miles','kilometres','pounds','kilograms'];
    var index = shortUnits.indexOf(unit);
    if (index === -1) {
      result = 'invalid unit';
    } else {
      result = longUnits[index];
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    var initUnits = ['gal','l','mi','km','lbs','kg'];
    var convertFactors = [galToL, 1/galToL, miToKm, 1/miToKm, lbsToKg, 1/lbsToKg];
    var index = initUnits.indexOf(initUnit);
    if (initNum === 'invalid unit' && initNum === 'invalid number') {
      result = 'invalid unit and number';
    } else if (initNum === 'invalid unit') {
      result = 'invalid unit';
    } else if (initNum === 'invalid number') {
      result = 'invalid number';
    } else {
      result = (initNum * convertFactors[index]).toFixed(5);
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
