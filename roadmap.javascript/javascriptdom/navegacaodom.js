/*

Com o HTML DOM, você pode navegar na árvore de nós usando relacionamentos de nós.

Nós DOM
De acordo com o padrão W3C HTML DOM, tudo em um documento HTML é um nó:

O documento inteiro é um nó de documento
Cada elemento HTML é um nó de elemento
O texto dentro dos elementos HTML são nós de texto
Cada atributo HTML é um nó de atributo (obsoleto)
Todos os comentários são nós de comentário


Com o HTML DOM, todos os nós na árvore de nós podem ser acessados por JavaScript.

Novos nós podem ser criados e todos os nós podem ser modificados ou excluídos.

Relacionamentos de nós
Os nós na árvore de nós têm um relacionamento hierárquico entre si.

Os termos pai, filho e irmão são usados para descrever os relacionamentos.

Em uma árvore de nós, o nó superior é chamado de raiz (ou nó raiz)
Cada nó tem exatamente um pai, exceto a raiz (que não tem pai)
Um nó pode ter vários filhos
Irmãos (irmãos ou irmãs) são nós com o mesmo pai.
*/

/*

<html>

  <head>
    <title>DOM Tutorial</title>
  </head>

  <body>
    <h1>DOM Lesson one</h1>
    <p>Hello world!</p>
  </body>

</html>


No HTML acima, você pode ler:

<html>é o nó raiz
<html>não tem pais
<html>é o pai de <head>e<body>
<head>é o primeiro filho de<html>
<body>é o último filho de<html>
e:

<head>tem um filho:<title>
<title>tem um filho (um nó de texto): "DOM Tutorial"
<body>tem dois filhos: <h1>e<p>
<h1>tem um filho: "DOM Lesson one"
<p>tem um filho: "Olá, mundo!"
<h1>e <p>são irmãos.

*/

/*

Navegando entre nós
Você pode usar as seguintes propriedades de nó para navegar entre os nós com JavaScript:

parentNode
childNodes[nodenumber]
firstChild
lastChild
nextSibling
previousSibling

*/



/*

Nós filhos e valores de nós
Um erro comum no processamento do DOM é esperar que um nó de elemento contenha texto.

Exemplo:
<title id="demo">DOM Tutorial</title>
O nó do elemento <title>(no exemplo acima) não contém texto.

Ele contém um nó de texto com o valor "DOM Tutorial".

O valor do nó de texto pode ser acessado pela innerHTMLpropriedade do nó:

myTitle = document.getElementById("demo").innerHTML;
Acessar a propriedade innerHTML é o mesmo que acessar o nodeValue do primeiro filho:

myTitle = document.getElementById("demo").firstChild.nodeValue;
O acesso ao primeiro filho também pode ser feito assim:

myTitle = document.getElementById("demo").childNodes[0].nodeValue;

*/


/*

HTML interno
Neste tutorial, usamos a propriedade innerHTML para recuperar o conteúdo de um elemento HTML.

No entanto, aprender os outros métodos acima é útil para entender a estrutura da árvore e a navegação do DOM.

*/


/*

Nós Raiz DOM
Existem duas propriedades especiais que permitem o acesso ao documento completo:

document.body- O corpo do documento
document.documentElement- O documento completo.

*/


/*

A propriedade nodeName
A nodeNamepropriedade especifica o nome de um nó.

nodeName é somente leitura
nodeName de um nó de elemento é o mesmo que o nome da tag
nodeName de um nó de atributo é o nome do atributo
nodeName de um nó de texto é sempre #text
nodeName do nó do documento é sempre #document.

Observação: nodeName sempre contém o nome da tag em maiúsculas de um elemento HTML.

*/


/*

A propriedade nodeValue
A nodeValuepropriedade especifica o valor de um nó.

nodeValue para nós de elemento énull
nodeValue para nós de texto é o próprio texto
nodeValue para nós de atributo é o valor do atributo.

*/


/*

A propriedade nodeType
A nodeTypepropriedade é somente leitura. Ele retorna o tipo de um nó.


As propriedades de nodeType mais importantes são:

Node	            Type	Example
ELEMENT_NODE	    1	    <h1 class="heading">W3Schools</h1>
ATTRIBUTE_NODE	    2	    class = "heading" (deprecated)
TEXT_NODE	        3	    W3Schools
COMMENT_NODE	    8	    <!-- This is a comment -->
DOCUMENT_NODE	    9	    The HTML document itself (the parent of <html>)
DOCUMENT_TYPE_NODE	10	    <!Doctype html>


O tipo 2 está obsoleto no HTML DOM (mas funciona). Não é obsoleto no XML DOM.
*/