function largestOfFour(arr) {
  let array = []
  for(let i = 0; i < arr.length; i++){
    let tmp = arr[i].sort((a,b)=>b-a)
    array.push(tmp[0])
  }
  return array
}


console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))