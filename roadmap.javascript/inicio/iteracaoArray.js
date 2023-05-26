//  Os métodos de iteração operam em cada item do array
const listaValores = [15, 25, 47, 2, 5, 13];
let texto = '';
listaValores.forEach(valores);
function valores(value) {
    texto = value;
    console.log(texto);
};

valores();

/*

    O map()método cria uma nova matriz executando uma função em cada elemento da matriz.

    O map()método não executa a função para elementos de array sem valores.

    O map()método não altera a matriz original

*/

function multiplicar(value) {
    console.log(value * 2);
};
listaValores.map(multiplicar);
multiplicar();

/*

O flatMap() método primeiro mapeia todos os elementos de uma matriz e, em seguida, cria uma nova matriz nivelando a matriz.

*/

listaValores.flatMap(somandoValores);
function somandoValores(value) {
    value += 2;
    console.log(value);
};

somandoValores();

// O filter() método cria uma nova matriz com elementos de matriz que passam em um teste.
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
};
console.log(over18);


/*

    JavaScript Array reduz()
    O reduce() método executa uma função em cada elemento da matriz para produzir (reduzi-lo a) um único valor.

    O reduce() método funciona da esquerda para a direita na matriz. Veja também reduceRight()
    O reduce()método não reduz a matriz original.


    O reduce()método pode aceitar um valor inicial:
*/

const somaTotal = numbers.reduce(somandoTodosValores);
function somandoTodosValores(total, value) {
    return total + value;
};
console.log(somaTotal);

/*

const somaTotal = numbers.reduce(somandoTodosValores, 100);
function somandoTodosValores(total, value) {
    return total + value;
};
console.log(somaTotal);

*/


/*

Matriz JavaScript a cada ()
O every()método verifica se todos os valores do array passam em um teste.

Este exemplo verifica se todos os valores da matriz são maiores que 18.

*/

const saoMaiores = numbers.every(minhaFunction);
function minhaFunction(value) {
    return value > 18;
};

console.log(saoMaiores);

/*

    JavaScript Array some()
    O some() método verifica se alguns valores de matriz passam em um teste.

    Este exemplo verifica se alguns valores de matriz são maiores que 18.

*/

const algunsMaiores = numbers.some(algumMaior);
function algumMaior(value) {
    return value > 18;
};
console.log(algunsMaiores);


/*

Array JavaScript indexOf()
O indexOf() método procura um array por um valor de elemento e retorna sua posição.

Caso o elemento em questão não for encontrado dentro do array o mesmo retornará -1.
Caso o elemento em questão estiver com o mesmo valor se repetindo mais de uma vez no array o mesmo retornará a ocorrencia do primeiro encontro.


Também podemos usar o método lastIndexOf(), que retornará a posição da última ocorrência do elemento em questão.
*/

const listaFrutas = ['Banana', 'Uva', 'Laranja', 'Maça'];
let posicaoFruta = listaFrutas.indexOf('Laranja')+ 1;
console.log(posicaoFruta);


/*

JavaScript Array find()
O find()método retorna o valor do primeiro elemento da matriz que passa em uma função de teste.

Este exemplo localiza (retorna o valor de) o primeiro elemento maior que 18:


Também podemos usar o método findIndeOf(), só que esse método localiza a posição(indice) do primeiro elemento maior que 18;
*/

const primeiroElemento = numbers.find(funcaoPrimeiro);
function funcaoPrimeiro(value) {
    return value > 18;
};

console.log(primeiroElemento);


/*

JavaScript Array.from()
O Array.from() método retorna um objeto Array de qualquer objeto com uma propriedade length ou qualquer objeto iterável

*/


console.log(Array.from("ABCDEFGHIFJKLMNOPQRSTUVXZ"));


/*

    Chaves de matriz JavaScript ()
    O Array.keys()método retorna um objeto Array Iterator com as chaves de um array.

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const keys = fruits.keys();

    for (let x of keys) {
    text += x + "<br>";
    }
*/

/*

    Entradas de matriz JavaScript ()
    O entries()método retorna um objeto Array Iterator com pares chave/valor.
    O entries()método não altera a matriz original


    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const f = fruits.entries();

    for (let x of f) {
    document.getElementById("demo").innerHTML += x;
    }

*/


/*

A matriz JavaScript inclui ()
ECMAScript 2016 introduzido Array.includes()em arrays. Isso nos permite verificar se um elemento está presente em uma matriz (incluindo NaN, ao contrário de indexOf).
Array.includes() permite verificar os valores NaN. Ao contrário de Array.indexOf().


const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango");
*/