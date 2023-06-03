/*

Um Conjunto JavaScript é uma coleção de valores únicos.

Cada valor só pode ocorrer uma vez em um Conjunto


Métodos de conjunto essenciais


Método	            Descrição
novo conjunto()	    Cria um novo conjunto
adicionar()	        Adiciona um novo elemento ao Conjunto
excluir()	        Remove um elemento de um Conjunto
tem()	            Retorna verdadeiro se existir um valor no Conjunto
para cada()	        Chama um callback para cada elemento no Set
valores()	        Retorna um iterador com todos os valores em um Set

Propriedade	Descrição
tamanho	            Retorna o número de elementos em um Conjunto

*/

const letras = new Set(["a", "b", "c", "d", "e", "f", "g"]);

letras.add("h");
letras.add("i");
letras.add("j");


letras.forEach(function(value) {
    console.log(value);
});


console.log(letras.values());