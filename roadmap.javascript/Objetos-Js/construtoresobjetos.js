/*


function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}


Notas
É considerado uma boa prática nomear as funções do construtor com uma primeira letra maiúscula.

Sobre isso
Em uma função construtora thisnão tem um valor. É um substituto para o novo objeto. O valor de thisse tornará o novo objeto quando um novo objeto for criado.




Tipos de Objetos (Blueprints) (Classes)
Os exemplos dos capítulos anteriores são limitados. Eles apenas criam objetos únicos.

Às vezes precisamos de um " plano " para criar muitos objetos do mesmo "tipo".

A maneira de criar um "tipo de objeto" é usar uma função de construtor de objeto .

No exemplo acima, function Person()é uma função construtora de objeto.

Objetos do mesmo tipo são criados chamando a função construtora com a newpalavra-chave:



O que é isso ?
Em JavaScript, a thispalavra-chave se refere a um objeto .

Qual objeto depende de como thisestá sendo invocado (usado ou chamado).

A thispalavra-chave refere-se a diferentes objetos dependendo de como é usada:

Em um método de objeto, thisrefere-se ao objeto .
Sozinho, thisrefere-se ao objeto global .
Em uma função, thisrefere-se ao objeto global .
Em uma função, no modo estrito, thisé undefined.
Em um evento, thisrefere-se ao elemento que recebeu o evento.
Métodos como call(), apply()e bind()podem se referir thisa qualquer objeto.



Adicionando uma propriedade a um construtor
Você não pode adicionar uma nova propriedade a um construtor de objeto da mesma forma que adiciona uma nova propriedade a um objeto existente.

Para adicionar uma nova propriedade a um construtor, você deve adicioná-la à função do construtor:

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}

Dessa forma, as propriedades do objeto podem ter valores padrão.




Adicionando um método a um construtor
Sua função construtora também pode definir métodos.
Você não pode adicionar um novo método a um construtor de objeto da mesma forma que adiciona um novo método a um objeto existente.

Adicionar métodos a um construtor de objeto deve ser feito dentro da função do construtor:




Construtores JavaScript integrados
O JavaScript possui construtores integrados para objetos nativos:


new String()    // A new String object
new Number()    // A new Number object
new Boolean()   // A new Boolean object
new Object()    // A new Object object
new Array()     // A new Array object
new RegExp()    // A new RegExp object
new Function()  // A new Function object
new Date()      // A new Date object

O Math()objeto não está na lista. Mathé um objeto global. A newpalavra-chave não pode ser usada em Math.




Você sabia?
Como você pode ver acima, o JavaScript tem versões de objeto dos tipos de dados primitivos String, Numbere Boolean. Mas não há razão para criar objetos complexos. Valores primitivos são muito mais rápidos:

Use strings literais ""em vez de new String().

Use literais numéricos 50em vez de new Number().

Use literais booleanos true / falseem vez de new Boolean().

Use literais de objeto {}em vez de new Object().

Use literais de matriz []em vez de new Array().

Use literais de padrão /()/em vez de new RegExp().

Use expressões de função () {}em vez de new Function().




Objetos String
Normalmente, strings são criadas como primitivas:firstName = "John"

Mas as strings também podem ser criadas como objetos usando a newpalavra-chave:
firstName = new String("John").




Número de Objetos
Normalmente, os números são criados como primitivos:x = 30

Mas os números também podem ser criados como objetos usando a newpalavra-chave:
x = new Number(30).




Objetos Booleanos
Normalmente, os booleanos são criados como primitivos:x = false

Mas os booleanos também podem ser criados como objetos usando a newpalavra-chave:
x = new Boolean(false)
*/