module.exports = function getZerosCount(number, base) {
    let zeroCount = 0;
      var result = []
      
      var d = 2;

      while (base > 1) {
        if (base % d === 0) {
          base /= d;
          result.push(d);
          d = 2;
        } else {
          d++;
        }
      
      return result;
    } 
    while (number) {
        number = (number / Math.pow(d, result));
          zeroCount += number;
    }
    return zeroCount;
  
  }