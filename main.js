function findLongestWordLength(str) {
  let len = str.split(' ')
  let sor = len.sort((a,b)=> b.length-a.length)
  let res = sor[0].split('')
  return res.length
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))