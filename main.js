const globalArray = [1, 30, 4, 21, 100000]

function nonMutatingSort(arr) {
let newArr = arr.slice()
return newArr.sort((a,b)=>a-b)
}

console.log(nonMutatingSort(globalArray))