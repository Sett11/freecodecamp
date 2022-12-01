const tree = [
  {
      v: 5,
      c: [
          {
              v: 5
          },
          {
              v: 10,
              c: [
                  {
                      v: 11,
                  }
              ]
          },
          {
              v: 11,
              c: [
                  {
                      v: 12,
                      c: [
                          {
                              v: 5
                          }
                      ]
                  }
              ]
          },
      ]
  },
  {
      v: 5,
      c: [
          {
              v: 7
          },
          {
              v: 12,
              c: [
                  {
                      v: 11,
                  }
              ]
          },
          {
              v: 14,
          },
      ]
  }
]
const f = (tr) => {
  let sum = 0
  tr.map(el=>{
    sum += el.v
    if(!el.c){
      return el.v
    }
    sum += f(el.c)
  })
  return sum
}
console.log(f(tree))