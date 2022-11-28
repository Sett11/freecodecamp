// Only change code below this line
function countdown(n){
    if(n<1){
      return []
    }
    else{
      const countArr = countdown(n-1)
      countArr.push(n)
      return countArr.reverse().sort((a, b) => b-a)
    }
  }
  // Only change code above this line
  console.log(countdown(5))