const squareList = arr => {
    return arr.filter(el=>Number.isInteger(el)&&el>0)
    .map(el=>el**2)
  }
  
  const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
  console.log(squaredIntegers);