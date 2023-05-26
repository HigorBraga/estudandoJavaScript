// Descobrindo o tamanho de um array

const listaNomes = ['Higor', 'Ana', 'Maria', 'Vanessa'];
let tamanhoLista = listaNomes.length;
console.log(tamanhoLista);


// Convertendo um array em uma String

const listaFrutas = ['Banana', 'Laranja', 'Uva', 'Pera'];
console.log(listaFrutas.toString());

// Também podemos usar o método join para fazer a conversão para String
console.log(listaFrutas.join());

// Removendo elementos de um array
// Lembrando que o método pop remove o último elemento da lista
// E também é bom lembrar que o método pop retorna o valor que foi removido
const listaNumeros = [1, 15, 35, 45, 97, 101];
let removerNumeros = listaNumeros.pop();
console.log(removerNumeros);

// Adicionando elementos em um array
// Lembrando que a adição de valores é feita ao final da lista
// E o método push retorna o novo tamanho da lista.
const listaValores = [98, 43, 27, 25, 1, 5, 10];
let addValores = listaValores.push(99);
console.log(addValores);

//Shifting é equivalente a popping, mas trabalhando no primeiro elemento em vez do último.
// Lembrando que o método shift também retorna o elemento que foi removido.
console.log(listaFrutas.shift('Melância'));
console.log(listaFrutas);

// O unshift método adiciona um novo elemento a uma matriz (no início) e "desloca" os elementos mais antigos.
// Lembrando que o método unshift também retorna o novo tamanho da lista.
console.log(listaNomes.unshift('Gabriela'));
console.log(listaNomes);

// Acessando os elementos de um array
// Para acessar os elementos de um array é usado os indices começando sempre do zero.
console.log(listaNomes[1]);


/*

    Aviso !
    Os elementos da matriz podem ser excluídos usando o operador JavaScript delete.

    Usando deletedeixa undefinedburacos na matriz.

    Em vez disso, use pop() ou shift().

*/

// Concatenando arrays
// O concat()método não altera as matrizes existentes. Ele sempre retorna um novo array.
// O concat()método pode receber qualquer número de argumentos de array.
// O concat()método também pode receber strings como argumentos.
const listaNovosNomes = ['Anderson', 'Pamela', 'Silvia', 'Marcelo'];
const listaAmigos = listaNomes.concat(listaNovosNomes);
console.log(listaAmigos);
console.log(listaAmigos.toString());

// Achatar uma matriz é o processo de reduzir a dimensionalidade de uma matriz.
// O método flat cria um novo array com elementos de sub-array concatenados em uma profundidade especificada.

const valores = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]];
const novosValores = valores.flat();
console.log(novosValores);
console.log(novosValores.toString()); // Convertendo em um string

// O splice método pode ser usado para adicionar novos itens a um array.
// O primeiro parâmetro (2) define a posição onde novos elementos devem ser adicionados (spliced in).
//  segundo parâmetro (0) define quantos elementos devem ser removidos.
console.log(listaFrutas.splice(2, 0, 'Melão', 'Morango'));
console.log(listaFrutas);
console.log(listaFrutas.splice(2, 2)); // também retorna um array com os elementos excluídos.

// O slice método divide um pedaço de uma matriz em uma nova matriz.
// O slice método pode receber dois argumentos como slice(1, 3).
// O método então seleciona elementos do argumento inicial e até (mas não incluindo) o argumento final.
// Se o argumento end for omitido, como nos primeiros exemplos, o slice() método cortará o resto do array.
console.log(listaNomes);
console.log(listaNomes.slice(1));

/*

    Observação
    O slice()método cria uma nova matriz.

    O slice()método não remove nenhum elemento da matriz de origem.

*/


