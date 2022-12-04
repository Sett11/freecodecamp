function truthCheck(collection, pre) {
    let arr = []
    for(let s of collection){
        arr.push(s[pre])
    }
    return arr.every(el => !!el !== false)
  }
  
  console.log(truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}], "number"))