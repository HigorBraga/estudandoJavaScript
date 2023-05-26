/*

    Math.random()
    Math.random()retorna um número aleatório entre 0 (inclusivo) e 1 (exclusivo):

    Math.random()sempre retorna um número menor que 1.


    Math.random()usado com Math.floor()pode ser usado para retornar números inteiros aleatórios.

    Não existem números inteiros em JavaScript.

    Estamos falando de números sem decimais aqui.

    Math.floor(Math.random() * 10);


    Uma Função Aleatória Adequada
    Como você pode ver nos exemplos acima, pode ser uma boa ideia criar uma função aleatória adequada para usar em todos os propósitos de números inteiros aleatórios.

    Esta função JavaScript sempre retorna um número aleatório entre min (incluído) e max (excluído):

    Exemplo
    function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
    }
*/

console.log(Math.floor(Math.random() * 10));