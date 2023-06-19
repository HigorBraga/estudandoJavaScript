/*

O objeto HTMLCollection
O getElementsByTagName()método retorna um HTMLCollectionobjeto.

Um HTMLCollectionobjeto é uma lista semelhante a uma matriz (coleção) de elementos HTML.

O código a seguir seleciona todos <p>os elementos em um documento.


Exemplo
const myCollection = document.getElementsByTagName("p");
Os elementos da coleção podem ser acessados por um número de índice.

Para acessar o segundo elemento <p> você pode escrever:

myCollection[1]
Nota: O índice começa em 0.
*/


/*

HTML HTMLComprimento da coleção
A lengthpropriedade define o número de elementos em um HTMLCollection:

Exemplo
myCollection.length
A lengthpropriedade é útil quando você deseja percorrer os elementos em uma coleção:

Exemplo
Altere a cor do texto de todos os elementos <p>:

const myCollection = document.getElementsByTagName("p");
for (let i = 0; i < myCollection.length; i++) {
  myCollection[i].style.color = "red";
}
Uma HTMLCollection NÃO é um array!

Uma HTMLCollection pode parecer uma matriz, mas não é.

Você pode percorrer a lista e referir-se aos elementos com um número (como uma matriz).

No entanto, você não pode usar métodos de matriz como valueOf(), pop(), push() ou join() em uma HTMLCollection.

*/