const frutas = ['Banana', 'Maça', 'Uva', 'Melância', 'Laranja'];
console.log(Array.isArray(frutas));
console.log(frutas instanceof Array);

console.log("============================================================================");

console.log(frutas.toString());
console.log(frutas.join(' , '));
console.log("============================================================================");

frutas.shift(); // retira o primeiro elemento de um array
console.log(frutas);

frutas.unshift('Melão'); // adiciona um novo elemento na primeira posição do array
console.log(frutas);

frutas[0] = 'Morango';
console.log(frutas);
console.log("============================================================================");

// delete frutas[3]; // Apaga um determinado elemento do array mas deixa um buraco no local onde o elemento foi apagado, por isso é mais recomendado usar o pop ou o shift
console.log(frutas);
const novasFrutas = ['Maracuja', 'Pesego', 'Tomate', 'Limão'];
const juntandoFrutas = frutas.concat(novasFrutas);
// O método concat não altera o array e sim cria um novo
console.log(juntandoFrutas);
console.log("============================================================================");

const valores = [[1,2], [3,4], [5,6]];
const novoValores = valores.flat();
// O método flat retorna todos os arrays em um só.
console.log(novoValores);

console.log("============================================================================");
// O método adiciona elementos nos arrays.

const b = juntandoFrutas.splice(4, 5, 'Pera', 'kiwi');
console.log(b);


const c = juntandoFrutas.splice(0, 1);
console.log(c);

const a = juntandoFrutas.splice(3);
console.log(a);

const g = juntandoFrutas.splice(1);
console.log(g);
console.log("============================================================================");