/*

O que é isso ?
Em JavaScript, a thispalavra-chave se refere a um objeto .

Qual objeto depende de como thisestá sendo invocado (usado ou chamado).

A thispalavra-chave refere-se a diferentes objetos dependendo de como é usada:

Em um método de objeto, thisrefere-se ao objeto .
Sozinho, thisrefere-se ao objeto global .
Em uma função, thisrefere-se ao objeto global .
Em uma função, no modo estrito, thisé undefined.
Em um evento, thisrefere-se ao elemento que recebeu o evento.
Métodos como call(), apply()e bind()podem se referir thisa qualquer objeto .

Observação
this não é uma variável. É uma palavra-chave. Você não pode alterar o valor de this.




Métodos JavaScript
Métodos JavaScript são ações que podem ser executadas em objetos.

Um método JavaScript é uma propriedade que contém uma definição de função.

Os métodos são funções armazenadas como propriedades do objeto.



Acessando Métodos de Objeto
Você acessa um método de objeto com a seguinte sintaxe:

objectName.methodName()
Normalmente, você descreverá fullName() como um método do objeto person e fullName como uma propriedade.

A propriedade fullName será executada (como uma função) quando for invocada com ().


Adicionando um método a um objeto
Adicionar um novo método a um objeto é fácil:

Exemplo
person.name = function () {
  return this.firstName + " " + this.lastName;
};
*/