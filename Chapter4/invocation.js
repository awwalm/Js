/*
function square(x, log) {
  if (log) {
    console.log(log(x));
  }
  return x * x;
}

console.log(square(24));
console.log(square(24, Math.log));
*/

square = (x, log) => {
  console.log(log?.(x));
  return x * x;
};

console.log(square(24));
console.log(square(24, Math.log));
