// A instrução JavaScript for inpercorre as propriedades de um objeto.


/*const pessoas = {
    nome: "Higor",
    sobrenome: "Gustavo",
    anoNascimento: 1997,
    peso: 70.8,
    altura: 1.63,
    dataAtual: new Date().getFullYear(),
    idade: function() {
        return this.dataAtual - this.anoNascimento;
    }
};

console.log(pessoas);


for (let pessoa in pessoas) {
    console.log(pessoas[pessoa]);
}
*/

const numeros = [15, 21, 28, 97, 5, 13, 35];

for (let num in numeros) {
    console.log(numeros[num]);
}


/*

Não use for em um Array se a ordem do índice for importante.

A ordem do índice depende da implementação e os valores da matriz podem não ser acessados na ordem esperada.

É melhor usar um loop for , um loop for of ou Array.forEach() quando a ordem for importante.

*/

console.log("============================================================");
numeros.forEach(function(valores) {
    console.log(valores);
});


