module.exports = function getZerosCount(number, base) {
    let zeroCount = 0;
   
    for (var base = 2; base <= 255; curr++) {

      for (var curr = 2; curr < i; curr++) {
        if (i % curr == 0) continue nextPrime;
      
        num /= curr;
        dividersNum[curr]++;
      }
  
        if (dividersNum[curr] !== 0){
           dividers.push(curr);
      }
curr++
    }

    while (number) {
        number = (number / dividers)+(number / dividers^2)+(number / dividers^3)+(number / dividers^4)+(number / dividers^5)+(number / dividers^6)+(number / dividers^7)+(number / dividers^8) | 0;
          zeroCount += number;
    }
    return zeroCount;
  }
  console.log(getZeroCount(8)); // 1
  console.log(getZeroCount(12)); // 2
