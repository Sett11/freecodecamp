function sumPrimes(num) {
  let arr = [false, false]
  
  for(let i = 2; i <= num; i++){
    arr[i] = true
  }
    let lim = Math.sqrt(num)
    for(let j = 2; j < num; j++){
      if(arr[j] === true){
        for(let k = j * j; k <= num; k += j){
          arr[k] = false
        }
      }
    }
  return arr.reduce((acc, cur, i) => {
    if( cur === true){
      return acc + i
    } else{
      return acc
    }
  })
}

console.log(sumPrimes(10))