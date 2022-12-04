function spinalCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/[\s_]/g, '-').toLowerCase()
  }
  
  console.log(spinalCase("The_Andy_Griffith_Show"))