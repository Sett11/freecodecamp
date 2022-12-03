function diffArray(arr1, arr2) {
    let newArr = arr1.concat(arr2)
    return newArr.filter((el) => arr1.indexOf(el) === -1 || arr2.indexOf(el) === -1)
  }
  
  console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]))