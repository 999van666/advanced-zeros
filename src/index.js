module.exports = function getZerosCount(number, base) {
  function isSimple(n) {

    for (let i = n; ;) {
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          return false;
        }
      }
      return true;
    } 

  }

  function getSimpleArr(base) {
    const simpleArr = [];
    
    for (let i = 2, j = 0; i <= base; i++, j++) {
      
      if (isSimple(i) && base % i === 0) {
        simpleArr.push({n: [], powt: 0});
  
        while (base % i === 0) {
          base /= i;
          simpleArr[j].n[0] = i;
          simpleArr[j].powt++;
        }
      } else {
        j--;
      }
    }

    return simpleArr;
  }

  function getSumArr(number, simpleArr) {  
    const sumArr = [];
  
    for (var j = 0; j < simpleArr.length; j++) {
      let sum = 0;

        for (let i = 1; i <= number; i++) {
          let int = Math.floor(number / Math.pow(simpleArr[j].n[0], i));

          if (int >= 1) {
            sum += int;
          } else {
            break;
          }
        }
      
      sumArr.push(Math.floor(sum / simpleArr[j].powt));
    }
  
    return Math.min(...sumArr);
  }

  return getSumArr(number, getSimpleArr(base));

}