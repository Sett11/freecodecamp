function steamrollArray(arr) {
  let res = [];
  function f(arr) {
    arr.forEach((el) => {
      if (!Array.isArray(el)) {
        res.push(el);
      } else {
        f(el);
      }
    });
  }
  f(arr)
  return res;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
