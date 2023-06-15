/*

ECMAScript 2015, também conhecido como ES6, introduziu classes JavaScript.

Classes JavaScript são modelos para Objetos JavaScript.



Sintaxe de classe JavaScript
Use a palavra-chave classpara criar uma classe.

Sempre adicione um método chamado constructor():

Sintaxe
class ClassName {
  constructor() { ... }
}
Exemplo
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
O exemplo acima cria uma classe chamada "Car".

A classe tem duas propriedades iniciais: "nome" e "ano".

Uma classe JavaScript não é um objeto.

É um modelo para objetos JavaScript.



Usando uma classe
Quando você tem uma classe, você pode usar a classe para criar objetos:

Exemplo
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

O exemplo acima usa a classe Car para criar dois objetos Car .

O método construtor é chamado automaticamente quando um novo objeto é criado.


O Método Construtor
O método construtor é um método especial:

Tem que ter o nome exato "constructor"
É executado automaticamente quando um novo objeto é criado
É usado para inicializar as propriedades do objeto
Se você não definir um método construtor, o JavaScript adicionará um método construtor vazio.


Métodos de classe
Os métodos de classe são criados com a mesma sintaxe dos métodos de objeto.

Use a palavra-chave classpara criar uma classe.

Sempre adicione um constructor()método.

Em seguida, adicione qualquer número de métodos.

class pessoa {
    constructor(nome, sobrenome, anoNascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.anoNascimento = anoNascimento;
    }

    idade() {
        const date = new Date();
        return date.getFullYear() - this.anoNascimento;
    }
}

const pessoa1 = new pessoa("Higor", "Gustavo", 1997);
console.log(pessoa1.idade());
*/