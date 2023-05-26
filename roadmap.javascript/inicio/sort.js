// Ordenando um array
const listaFrutas = ['Banana', 'Melão', 'Laranja', 'Melância', 'Mamão', 'Carambola'];
console.log(listaFrutas.sort());

// Invertendo a ordem de um array
listaFrutas.sort();
console.log(listaFrutas.reverse());

// Ordenando arrays numericos.
// Por padrão, a sort função classifica os valores como strings.
// No entanto, se os números forem classificados como strings, "25" é maior que "100", porque "2" é maior que "1".
// Por causa disso, o sort()método produzirá resultados incorretos ao classificar números.
// Você pode corrigir isso fornecendo uma função de comparação.
const listaValores = [15, 1, 35, 4, 97, 3, 25, 294, 2];
listaValores.sort(function(a, b) {return a - b});
console.log(listaValores);

// O mesmo método pode ser usado para mostar o array em ordem decrescente.
listaValores.sort(function(a, b) {return b - a});
console.log(listaValores);


/*

Método Fisher Yates
O exemplo acima, array .sort(), não é preciso. Isso favorecerá alguns números em detrimento de outros.

O método correto mais popular é chamado de shuffle de Fisher Yates e foi introduzido na ciência de dados já em 1938!

Em JavaScript, o método pode ser traduzido para isto.

const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
*/


// Encontrando o valor mais baixo de um array
// Depois de colocar um array em ordem crescente basta pegar o primeiro valor.
listaValores.sort(function(a, b) {return a -b});
console.log(listaValores[0]);
// Ou também podemos usar o método Math.min.apply
console.log(Math.min.apply(null, listaValores));

// Encontrando o valor mais alto de um array
// Depois de colocar um array em ordem decrescente basta pegar o primeiro valor.
listaValores.sort(function(a, b) {return b - a});
console.log(listaValores[0]);
// Também podemos usar o método Math.max.apply para encontrar o maior valor
console.log(Math.max.apply(null, listaValores));


// Classificando lista de objetos
// Mesmo que os objetos tenham propriedades de tipos de dados diferentes, o sort() método pode ser usado para classificar a matriz.
const pessoas = [
    {nome: 'Higor', idade: 25},
    {nome: "Vanessa", idade: 35},
    {nome: 'Vitor', idade: 26},
    {nome: 'Bruno', idade: 17}
];

console.log(pessoas.sort(function(a, b) {return a.idade - b.idade}));

// A comparação de propriedades de string é um pouco mais complexa.
console.log((pessoas.sort(function(a, b) {
    let x = a.nome.toLocaleLowerCase();
    let y = b.nome.toLocaleLowerCase();
    if (x < y) {
        return -1;
    } else {
        return 1;
    }
    return 0;
})));