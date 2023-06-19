/*

Adicionando e removendo nós (elementos HTML)

Criando novos elementos HTML (nós)
Para adicionar um novo elemento ao HTML DOM, primeiro você deve criar o elemento (nó do elemento) e, em seguida, anexá-lo a um elemento existente.


Exemplo
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);
</script>



Exemplo explicado 
Este código cria um novo <p>elemento:

const para = document.createElement("p");
Para adicionar texto ao <p>elemento, primeiro você deve criar um nó de texto. Este código cria um nó de texto:

const node = document.createTextNode("This is a new paragraph.");
Em seguida, você deve anexar o nó de texto ao <p>elemento:

para.appendChild(node);
Por fim, você deve anexar o novo elemento a um elemento existente.

Este código encontra um elemento existente:

const element = document.getElementById("div1");
Este código anexa o novo elemento ao elemento existente:

element.appendChild(para);
*/


/*

Criando novos elementos HTML - insertBefore()
O appendChild()método no exemplo anterior anexou o novo elemento como o último filho do pai.

Se você não quiser, pode usar o insertBefore()método:

Exemplo
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
const child = document.getElementById("p1");
element.insertBefore(para, child);
</script>

*/


/*

Removendo elementos HTML existentes
Para remover um elemento HTML, use o remove() método:

Exemplo
<div>
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const elmnt = document.getElementById("p1"); elmnt.remove();
</script>


Exemplo explicado 
O documento HTML contém um <div>elemento com dois nós filhos (dois <p> elementos):

<div>
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>
Encontre o elemento que deseja remover:

const elmnt = document.getElementById("p1");
Em seguida, execute o método remove() nesse elemento:

elmnt.remove();
O remove()método não funciona em navegadores mais antigos, veja o exemplo abaixo para saber como usar removeChild().

Removendo um nó filho
Para navegadores que não suportam o remove()método, você deve encontrar o nó pai para remover um elemento:

Exemplo
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const parent = document.getElementById("div1");
const child = document.getElementById("p1");
parent.removeChild(child);
</script>


Aqui está uma solução comum: encontre o filho que deseja remover e use sua parentNodepropriedade para encontrar o pai:

const child = document.getElementById("p1");
child.parentNode.removeChild(child);
*/


/*

Substituindo Elementos HTML 
Para substituir um elemento no HTML DOM, use o replaceChild()método:

Exemplo
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const parent = document.getElementById("div1");
const child = document.getElementById("p1");
parent.replaceChild(para, child);
</script>

*/