/*

ECMAScript 2015 (ES6)
Em 2015, o JavaScript introduziu uma nova palavra-chave importante: const.

Tornou-se uma prática comum declarar arrays usando const:

const listaFrutas = ['Banana', 'Laranja', 'Maça', 'Pera'];


Não pode ser reatribuído
Uma matriz declarada com constnão pode ser reatribuída.

Exemplo:
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];

Se o exemplo acima fosse executado isso causaria um erro no programa.



Arrays não são constantes
A palavra-chave consté um pouco enganadora.

Ele NÃO define uma matriz constante. Ele define uma referência constante a um array.

Por causa disso, ainda podemos alterar os elementos de uma matriz constante.


Atribuído quando declarado
As variáveis JavaScript constdevem receber um valor quando são declaradas:

Significado: Um array declarado com constdeve ser inicializado ao ser declarado.

Usar constsem inicializar o array é um erro de sintaxe.


Escopo do bloco const
Um array declarado com consttem Block Scope .

Um array declarado em um bloco não é o mesmo que um array declarado fora do bloco.
*/