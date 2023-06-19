/*

Esta página ensina como localizar e acessar elementos HTML em uma página HTML.

Encontrando Elementos HTML
Frequentemente, com JavaScript, você deseja manipular elementos HTML.

Para fazer isso, você deve encontrar os elementos primeiro. Existem várias maneiras de fazer isso:

Encontrando elementos HTML por id
Encontrando elementos HTML por nome de tag
Encontrando elementos HTML por nome de classe
Encontrando elementos HTML por seletores CSS
Encontrando elementos HTML por coleções de objetos HTML.

*/

/*

Encontrando Elemento HTML por Id
A maneira mais fácil de encontrar um elemento HTML no DOM é usando o id do elemento.

Este exemplo encontra o elemento com id="intro":

Exemplo
const element = document.getElementById("intro");
Se o elemento for encontrado, o método retornará o elemento como um objeto (in element).

Se o elemento não for encontrado, o elemento conterá null.

*/

/*

Encontrando elementos HTML por nome de tag
Este exemplo localiza todos <p>os elementos:

Exemplo
const element = document.getElementsByTagName("p");
Este exemplo localiza o elemento com id="main"e, em seguida, localiza todos <p>os elementos dentro de "main":

Exemplo
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

*/

/*

Encontrando Elementos HTML por Nome de Classe
Se você deseja localizar todos os elementos HTML com o mesmo nome de classe, use getElementsByClassName().
Este exemplo retorna uma lista de todos os elementos com class="intro".

Exemplo
const x = document.getElementsByClassName("intro");

*/

/*

Encontrando Elementos HTML por Seletores CSS
Se você quiser encontrar todos os elementos HTML que correspondem a um seletor CSS especificado (id, nomes de classes, tipos, atributos, valores de atributos, etc.), use o querySelectorAll()método.
Este exemplo retorna uma lista de todos <p>os elementos com class="intro".

Exemplo
const x = document.querySelectorAll("p.intro");

*/


/*

Encontrando Elementos HTML por Coleções de Objetos HTML
Este exemplo localiza o elemento de formulário com id="frm1", na coleção de formulários e exibe todos os valores do elemento:

Exemplo
const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;
Os seguintes objetos HTML (e coleções de objetos) também são acessíveis:

documento.âncoras
documento.corpo
document.documentElement
document.embeds
documento.formulários
documento.head
document.imagens
documento.links
document.scripts
título do documento

*/