
  function rangeOfNumbers(startNum, endNum) {
    if(startNum===endNum){
        return [startNum]
    }
    else{
        const countArr = rangeOfNumbers(startNum, endNum-1)
        countArr.push(endNum)
        return countArr
    }
  }
  console.log(rangeOfNumbers(1,5))