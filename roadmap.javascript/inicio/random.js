/*

Math.random()
Math.random()retorna um número aleatório entre 0 (inclusivo) e 1 (exclusivo).
Math.random()sempre retorna um número menor que 1.


JavaScript inteiros aleatórios
Math.random()usado com Math.floor()pode ser usado para retornar números inteiros aleatórios.

Não existem números inteiros em JavaScript.

Estamos falando de números sem decimais aqui.
*/

console.log(Math.floor(Math.random() * 10));
// Nesse caso ele nunca iria mostrar o valor 10, pois ele não conta o ultimo valor.
// Para fazer com que ele mostrasse o 10 nos valores aleatorios temos que colocar 11.

// Math.floor(Math.random() * 100) + 1; Ou podemos fazer dessa forma.