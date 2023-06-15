/*

Reutilização de método
Com o call()método, você pode escrever um método que pode ser usado em diferentes objetos.

Todas as funções são métodos
Em JavaScript todas as funções são métodos de objeto.

Se uma função não é um método de um objeto JavaScript, é uma função do objeto global (ver capítulo anterior).

O exemplo abaixo cria um objeto com 3 propriedades, firstName, lastName, fullName.

Exemplo
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

// This will return "John Doe":
person.fullName();  
No exemplo acima, thisrefere-se ao objeto person .

this.firstName significa a propriedade firstName deste .

Igual a:

this.firstName significa a propriedade firstName de person .

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


O método call() do JavaScript
O call()método é um método JavaScript predefinido.

Ele pode ser usado para invocar (chamar) um método com um objeto proprietário como argumento (parâmetro).

Com call(), um objeto pode usar um método pertencente a outro objeto.

Este exemplo chama o método fullName de person, usando-o em person1 :

Exemplo
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);


O método call() com argumentos
O call()método pode aceitar argumentos:

Exemplo
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.call(person1, "Oslo", "Norway");
*/