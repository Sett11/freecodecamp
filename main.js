function f(s){
  return s.match(/[.*C+.*]/g).join('')
}
console.log(f('CC'))