function whatIsInAName(collection, source) {
    let arr = []
    arr = collection.filter(obj => {
        let soKeys = Object.keys(source)
        for(let i = 0; i < soKeys.length; i++){
            if(obj.hasOwnProperty(soKeys[i])){
                if(obj[soKeys[i]] != source[soKeys[i]]){
                    return false
                }
            }
            else{
                return false
            }
        }
        return true
    })
    return arr
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))