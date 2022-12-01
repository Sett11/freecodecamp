function filteredArray(arr, elem) {
  let newArr = [];
  for( let i = 0; i < arr.length; i++){
    arr[i].indexOf(elem)===-1?newArr.push(arr[i]): null
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 4, 9]], 3));