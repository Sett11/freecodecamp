function palindrome(str) {
    return  str.toLowerCase().replace(/[\W_]/g, '') === str.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('')? true: false
  }
  
  console.log(palindrome("0_0 (: /-\ :) 0-0"))