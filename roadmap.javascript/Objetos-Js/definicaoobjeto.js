/*

Em JavaScript, os objetos são rei. Se você entende de objetos, você entende de JavaScript.


*/

/*

Em JavaScript, quase "tudo" é um objeto.

Booleanos podem ser objetos (se definidos com a newpalavra-chave)
Os números podem ser objetos (se definidos com a newpalavra-chave)
Strings podem ser objetos (se definidos com a newpalavra-chave)
Datas são sempre objetos
Matemáticas são sempre objetos
Expressões regulares são sempre objetos
Arrays são sempre objetos
Funções são sempre objetos
Objetos são sempre objetos
Todos os valores JavaScript, exceto os primitivos, são objetos.

*/


/*

JavaScript Primitivo
Um valor primitivo é um valor que não tem propriedades ou métodos.

3,14 é um valor primitivo

Um tipo de dados primitivo são dados que possuem um valor primitivo.

JavaScript define 7 tipos de tipos de dados primitivos:

Exemplos
string
number
boolean
null
undefined
symbol
bigint


Imutável
Os valores primitivos são imutáveis (são codificados e não podem ser alterados).

se x = 3,14, você pode alterar o valor de x, mas não pode alterar o valor de 3,14.
*/


/*

Variáveis JavaScript também podem conter muitos valores.

Os objetos também são variáveis. Mas os objetos podem conter muitos valores.

Os valores do objeto são escritos como pares de nome: valor (nome e valor separados por dois pontos).


Um objeto JavaScript é uma coleção de valores nomeados

É uma prática comum declarar objetos com a constpalavra-chave.

*/


/*

Métodos de objeto
Métodos são ações que podem ser executadas em objetos.

As propriedades do objeto podem ser valores primitivos, outros objetos e funções.

Um método de objeto é uma propriedade de objeto que contém uma definição de função .

Objetos JavaScript são contêineres para valores nomeados, chamados de propriedades e métodos.
*/


/*

Criando um objeto JavaScript
Com JavaScript, você pode definir e criar seus próprios objetos.

Existem diferentes maneiras de criar novos objetos:

Crie um único objeto, usando um objeto literal.
Crie um único objeto, com a palavra-chave new.
Defina um construtor de objeto e crie objetos do tipo construído.
Crie um objeto usando Object.create().

*/


/*

Usando um Literal de Objeto
Esta é a maneira mais fácil de criar um Objeto JavaScript.

Usando um literal de objeto, você define e cria um objeto em uma instrução.

Um literal de objeto é uma lista de pares nome:valor (como idade:50) entre chaves {}.

*/


/*

Objetos JavaScript são mutáveis
Objetos são mutáveis: eles são endereçados por referência, não por valor.

Se pessoa for um objeto, a seguinte instrução não criará uma cópia de pessoa:

O objeto x não é uma cópia da pessoa. é pessoa . Tanto x como pessoa são o mesmo objeto.

Qualquer alteração em x também mudará a pessoa, porque x e a pessoa são o mesmo objeto.
*/