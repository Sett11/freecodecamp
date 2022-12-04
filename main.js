function myReplace(str, before, after) {
    let sen = str.split(' ')
    for(let i = 0; i< sen.length; i++){
        if(sen[i] == before){
            let wor = sen[i]
            if(/[A-Z]/.test(wor[0])){
                let af = after.charAt(0).toUpperCase() + after.slice(1)
                sen.splice(i, 1, af)
            }
            else if(/[a-z]/.test(wor[0])){
                let af = after.charAt(0).toLowerCase() + after.slice(1)
                sen.splice(i, 1, af)
            }
            else{
                sen.splice(i, 1, after)
            }
        }
    }
    return sen.join(' ')
  }
  
  console.log(myReplace("I think we should look up there", "up", "Down"))
  