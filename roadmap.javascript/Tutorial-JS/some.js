// Este exemplo verifica se alguns valores de matriz são maiores que 18:

const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(someOver18);