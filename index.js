function theBeatlesPlay (arrayM, arrayI) {
  let x = [];
  for (let i= 0; i < 4; i++) {
    x.push(`${arrayM[i]} plays ${arrayI[i]}`);
  }
  return x;
}
function johnLennonFacts (array) {
  let x = []
  let i = 0
  while(i < array.length) {
  x.push(`${array[i++]}!!!`)
  }
  return x
}
function iLoveTheBeatles (n) {
  let x = [];
  do {
    x.push("I love the Beatles!")
    n = n + 1
   } while(n < 15)
   return x
  }