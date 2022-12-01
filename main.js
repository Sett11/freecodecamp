let arr = [1,2,3,4,5,6,7,8,9]

const f = (ar, n) => {
  return ar[0]===n?true:
  ar[1]===n?true:
  ar[2]===n?true:
  ar[3]===n?true:
  ar[4]===n?true:
  ar[5]===n?true:
  ar[6]===n?true:
  ar[7]===n?true:
  ar[8]===n?true:false
}
console.log(f(arr, 7))