let textos = 'Banana, Maça, Pera';
let parte = textos.slice(-5);
console.log(parte);


console.log("===============================================================");


let lista = 'Banana, Pera, Melão';
let partes = lista.substring(7, 13);
console.log(partes);

/*
    substring()é semelhante a slice().

    A diferença é que os valores inicial e final menores que 0 são tratados como 0 em substring().

*/


console.log("===============================================================");

let novalista = 'Laranja, Pera, Uva';
let part = novalista.replace("Pera", "Banana");
console.log(part);

// O método repalce não altera a string.

console.log("===============================================================");

let minhalista = 'Laranja, Pera, Uva';
let parti = novalista.replaceAll("Uva", "Abacate");
console.log(parti);
console.log(novalista);


console.log("===============================================================");

let palavra = 'Olá, Mundo!!!';
console.log(palavra.toUpperCase());
console.log(palavra.toLowerCase());



console.log("===============================================================");

let novapalavra = 'Olá';
let palavranova = 'Mundo!!!'
console.log(novapalavra.concat(", ", palavranova));


/*

    Observação
    Todos os métodos de string retornam uma nova string. Eles não modificam a string original.

    Disse formalmente:

    As strings são imutáveis: as strings não podem ser alteradas, apenas substituídas.

*/



console.log("===============================================================");

let texto1 = '                Minha casa agora pertecen a você    ';
let corte = texto1.trim();
console.log(corte);


console.log("===============================================================");

let texto2 = "5";
let padd = texto2.padStart(4, "0");
console.log(padd);
let paddEnd = texto2.padEnd(4, "0");
console.log(paddEnd);


console.log("===============================================================");

let texto3 = 'Minha casa agora é rosa';
let chart = texto3.charAt(0);
console.log(chart);
let charts = texto3.charCodeAt(0);
console.log(charts);
let texto4 = texto3.split(" ");
console.log(texto4);