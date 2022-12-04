function destroyer(arr) {
    let newArr = []
    for(let i = 0; i < arguments.length; i++){
        newArr[i] = arguments[i]
    }
     let nextMyArr = newArr.shift()
    return nextMyArr.filter(el => newArr.indexOf(el) === -1)
  }
  
  console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))