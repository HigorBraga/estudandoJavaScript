/*

O Objeto HTML DOM NodeList
Um NodeListobjeto é uma lista (coleção) de nós extraídos de um documento.

Um NodeListobjeto é quase o mesmo que um HTMLCollectionobjeto.

Alguns navegadores (mais antigos) retornam um objeto NodeList em vez de um HTMLCollection para métodos como getElementsByClassName().

Todos os navegadores retornam um objeto NodeList para a propriedade childNodes. 

A maioria dos navegadores retorna um objeto NodeList para o método querySelectorAll().

O código a seguir seleciona todos <p>os nós em um documento:

Exemplo
const myNodeList = document.querySelectorAll("p");
Os elementos no NodeList podem ser acessados por um número de índice.

Para acessar o segundo nó <p> você pode escrever:

myNodeList[1]
Nota: O índice começa em 0.

Comprimento da lista de nós HTML DOM
A lengthpropriedade define o número de nós em uma lista de nós:

Exemplo
myNodelist.length
A lengthpropriedade é útil quando você deseja percorrer os nós em uma lista de nós:

Exemplo
Altere a cor de todos os elementos <p> em uma lista de nós:

const myNodelist = document.querySelectorAll("p");
for (let i = 0; i < myNodelist.length; i++) {
  myNodelist[i].style.color = "red";
}

*/


/*

A diferença entre um HTMLCollection e um NodeList
Uma NodeList e uma HTMLcollection são basicamente a mesma coisa.

Ambos são coleções semelhantes a matrizes (listas) de nós (elementos) extraídos de um documento. Os nós podem ser acessados por números de índice. O índice começa em 0.

Ambos possuem uma propriedade length que retorna o número de elementos da lista (coleção).

Um HTMLCollection é uma coleção de elementos de documento .

Uma NodeList é uma coleção de nós de documento (nós de elemento, nós de atributo e nós de texto).

Os itens HTMLCollection podem ser acessados por seu nome, id ou número de índice.

Os itens NodeList só podem ser acessados por seu número de índice.

Uma HTMLCollection é sempre uma coleção ativa . Exemplo: se você adicionar um elemento <li> a uma lista no DOM, a lista no HTMLCollection também será alterada.

Uma NodeList geralmente é uma coleção estática . Exemplo: Se você adicionar um elemento <li> a uma lista no DOM, a lista em NodeList não será alterada.

Os métodos getElementsByClassName()e getElementsByTagName() retornam uma HTMLCollection ativa.

O querySelectorAll()método retorna uma NodeList estática.

A childNodespropriedade retorna uma NodeList ativa.

Não é uma matriz!
Uma NodeList pode parecer um array, mas não é.

Você pode percorrer um NodeList e consultar seus nós por índice.

Mas você não pode usar métodos Array como push(), pop() ou join() em uma NodeList.

*/