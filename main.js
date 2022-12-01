function findElement(arr, func) {
  let result = undefined
  for(let i = 0; i < arr.length; i++){
    if(func(arr[i])){
      return result = arr[i]
    }
  }
  return result
}

console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0))