/*


Sintaxe de classe JavaScript
Use a palavra-chave classpara criar uma classe.

Sempre adicione um método chamado constructor().

class ClassName {
  constructor() { ... }
}



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
*/

class Pessoas {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
};

const pessoa1 = new Pessoas("Higor", 26);
const pessoa2 = new Pessoas("Vitor", 27);
console.log(pessoa1);
console.log(pessoa2);


/*

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
*/

class Carros {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }

    age (){
        const date = new Date();
        return date.getFullYear() - this.ano;
    }
};

const carro1 = new Carros("Fiat", 1994);
console.log(`Meu carro tem ${carro1.age()} anos`);


/*

Você pode enviar parâmetros para métodos de classe:


class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

const date = new Date();
let year = date.getFullYear();

const myCar = new Car("Ford", 2014);

*/