const carro = {
    marca: "volkswagen",
    modelo: "Fusca",
    cor: "Preto",
    ano: 1994,
    preco: 1345.60,
};

console.log(carro);


const pessoa = {
    nome: "Higor",
    sobrenome: "Gustavo",
    idade: 25,
    sexo: "M",
    peso: 75.4,
    altura: 1.63,
    nacionalidade: "Brasileiro",
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(`O senhor ${pessoa.nome} tem ${pessoa.idade} anos e sua nacionalidade é ${pessoa.nacionalidade}.`);

console.log(pessoa.nomeCompleto());

console.log(pessoa.nomeCompleto);