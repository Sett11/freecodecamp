function sumAll(arr) {
    let i = arr[0]
    let j = arr[1]
    let newArr = []
    if(i>j){
        while(j<=i){
            newArr.push(j)
            j++
        }
    }
    else{
        while(i<=j){
            newArr.push(i)
            i++
        }
    }
    return newArr.reduce((acc, cur)=>acc+cur)
  }
  
  console.log(sumAll([5,10]))