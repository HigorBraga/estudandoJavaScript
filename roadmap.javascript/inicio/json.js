/*

JSON é um formato para armazenar e transportar dados.

JSON é frequentemente usado quando os dados são enviados de um servidor para uma página da web.



O que é JSON?
JSON significa Java Script Object N otation _ _
JSON é um formato leve de intercâmbio de dados
JSON é independente de linguagem *
JSON é "autodescritivo" e fácil de entender
* A sintaxe JSON é derivada da sintaxe de notação de objeto JavaScript, mas o formato JSON é apenas texto. O código para leitura e geração de dados JSON pode ser escrito em qualquer linguagem de programação.

{
"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
}


O formato JSON avalia para objetos JavaScript
O formato JSON é sintaticamente idêntico ao código para criar objetos JavaScript.

Devido a essa semelhança, um programa JavaScript pode facilmente converter dados JSON em objetos JavaScript nativos.


Regras de sintaxe JSON
Os dados estão em pares nome/valor
Os dados são separados por vírgulas
Chaves seguram objetos
Os colchetes contêm matrizes
*/


/*

Dados JSON - um nome e um valor
Os dados JSON são gravados como pares de nome/valor, assim como as propriedades do objeto JavaScript.

Um par nome/valor consiste em um nome de campo (entre aspas duplas), seguido por dois pontos, seguido por um valor:

"firstName":"John"
Os nomes JSON requerem aspas duplas. Nomes JavaScript não.

*/

/*

Objetos JSON
Os objetos JSON são escritos entre chaves.

Assim como em JavaScript, os objetos podem conter vários pares nome/valor:

{"firstName":"John", "lastName":"Doe"}




Matrizes JSON
As matrizes JSON são escritas entre colchetes.

Assim como em JavaScript, um array pode conter objetos:

"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]


No exemplo acima, o objeto "funcionários" é um array. Ele contém três objetos.

Cada objeto é um registro de uma pessoa (com um nome e um sobrenome).
*/



/*

Convertendo um texto JSON em um objeto JavaScript
Um uso comum de JSON é ler dados de um servidor da web e exibir os dados em uma página da web.

Para simplificar, isso pode ser demonstrado usando uma string como entrada.

*/

let pessoas = '{ "pessoa" : [' +
'{ "Nome": "Higor", "Sobrenome": "Gustavo"},' +
'{ "Nome": "Vitor", "Sobrenome": "Gabriel"},' +
'{ "Nome": "Felipe", "Sobrenome": "Henrique"}]}';

const objetos = JSON.parse(pessoas);

console.log(objetos);