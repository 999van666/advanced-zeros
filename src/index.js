module.exports = function getZerosCount(number, base) {
    let zeroCount = 0;
      while (number) {
        for (var base = 2; base <= 255; base++) {

          for (var j = 2; j < i; j++) {
            if (base % j == 0) continue nextPrime;
          }
        
      
          alert( base ); // простое
        }
        number = (number / base)+(number / base^2)+(number / base^3)+(number / base^4)+(number / base^5)+(number / base^6)+(number / 2^7)+(number / base^8) | 0;
          zeroCount += number;
    }
    return zeroCount;
  }
  console.log(getZeroCount(8)); // 1
  console.log(getZeroCount(12)); // 2
