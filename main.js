function sumFibs(num) {
    if(num === 1){
        return num
    }
    let arr = [1, 1]
    for(let i = 2; i < num; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr.slice(0, num)
    .filter(el => el<=num && el%2!==0)
    .reduce((acc, cur) => acc + cur)
  }
  
  console.log(sumFibs(4))