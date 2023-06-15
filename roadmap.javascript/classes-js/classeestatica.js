/*

Os métodos estáticos de classe são definidos na própria classe.

Você não pode chamar um staticmétodo em um objeto, apenas em uma classe de objeto.

*/

/*
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    static mensagem() {
        return `Olá`;
    }
}


const pessoa1 = new Pessoa("Higor", "Gustavo");
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(Pessoa.mensagem());

console.log("------------------------------------------------------------------------------------------------");
*/

/*

Caso queira utilizar o objeto myCar dentro do staticmétodo, você pode enviar como parâmetro.

*/

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    static mensagem(x) {
        return `Olá meu nome é ${x.nome} ${x.sobrenome}`;
    }
}


const pessoa1 = new Pessoa("Higor", "Gustavo");
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(Pessoa.mensagem(pessoa1));