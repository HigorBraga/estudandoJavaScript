/*

Herança de classe
Para criar uma herança de classe, use a extends palavra-chave.

Uma classe criada com uma herança de classe herda todos os métodos de outra classe


O super()método refere-se à classe pai.

Ao chamar o super()método no método construtor, chamamos o método construtor do pai e obtemos acesso às propriedades e métodos do pai.

A herança é útil para reutilização de código: reutilize propriedades e métodos de uma classe existente ao criar uma nova classe.

Getters e Setters
As classes também permitem que você use getters e setters.

Pode ser inteligente usar getters e setters para suas propriedades, especialmente se você quiser fazer algo especial com o valor antes de retorná-los ou antes de defini-los.

Para adicionar getters e setters na classe, use as palavras-chave gete set.

Observação: mesmo que o getter seja um método, não use parênteses quando quiser obter o valor da propriedade.

O nome do método getter/setter não pode ser igual ao nome da propriedade, neste caso carname.

Muitos programadores usam um caractere sublinhado _ antes do nome da propriedade para separar o getter/setter da propriedade real:
*/

// Criando uma classe pessoa e usando herança na mesma para criar a classe outroGostos.

class Pessoa {
    constructor(nome, sobrenome, anoNascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.anoNascimento = anoNascimento;
    }

    idade () {
        const anoAtual = new Date();
        return anoAtual.getFullYear() - this.anoNascimento;
    }

    nomeCompleto() {
        return ` Meu nome é ${this.nome} ${this.sobrenome}`;
    }
}


class outroGostos extends Pessoa {
    constructor(nome, sobrenome, anoNascimento, cor, sexo) {
        super(nome, sobrenome, anoNascimento);
        this.cor = cor;
        this.sexo = sexo;
    }

    falar() {
        return `${this.nomeCompleto()} tenho ${this.idade()} anos, meu sexo é ${this.sexo} e minha cor favorita é ${this.cor}.`;
    }
}
const pessoa1 = new outroGostos("Higor", "Gustavo", 1997, "Azul", "Masculino");

console.log(pessoa1.falar());


console.log("------------------------------------------------------------------------------------------------");

/*

Criando classe e usando os metodos get e set.

Para usar um setter , use a mesma sintaxe de quando você define um valor de propriedade, sem parênteses

Elevação
Ao contrário das funções e outras declarações JavaScript, as declarações de classe não são suspensas.

Isso significa que você deve declarar uma classe antes de poder usá-la.

Nota: Para outras declarações, como funções, você NÃO receberá um erro ao tentar usá-lo antes de ser declarado, porque o comportamento padrão das declarações JavaScript é hoisting (mover a declaração para o topo).

*/
class Carros {
    constructor(marca) {
        this._nomecarro = marca;
    }

    get marca() {
        return this._nomecarro;
    }

    set marca(x) {
        this._nomecarro = x;
    }
}

const carro1 = new Carros("Fiat");
console.log(`Meu carro é da marca ${carro1.marca}`);