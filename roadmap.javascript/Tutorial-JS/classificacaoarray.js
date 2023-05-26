const frutas = ['Banana', 'Maça', 'Uva', 'Melância', 'Laranja'];
console.log(frutas.sort());
console.log(frutas.reverse());
let frases = 'a sacada da casa';
console.log(frases.split(' ').join(''));
//console.log(frases.);



/*
    Com a função abaixo podemos ter qualquer string
    1 - separamos
    2 - revertemos
    3 - juntamos novamente

    fazendo ela ficar de trás para frente
*/
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("a sacada da casa".split(" ").join('')));
console.log(reverseString('higor'.split(" ").join('')));