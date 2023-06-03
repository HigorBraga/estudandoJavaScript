/*

O For Of Loop
A instrução JavaScript for ofpercorre os valores de um objeto iterável.

Ele permite que você percorra estruturas de dados iteráveis, como Arrays, Strings, Maps, NodeLists e muito mais

*/

const palavras = ['Pizza', 'Lanche', 'Vegano', 'Carnivoro', 'Pascoa', 'Americano'];
for (palavra of palavras) {
    console.log(palavra);
}