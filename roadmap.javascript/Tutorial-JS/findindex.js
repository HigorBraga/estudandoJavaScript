// Este exemplo localiza o índice do primeiro elemento maior que 18:

const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(first);