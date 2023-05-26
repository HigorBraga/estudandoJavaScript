const lista = [1, 2, 3, 4, 5, 6, 7, 8];

lista.push(10);
lista[0] = -1;

console.log(lista);


const dicionario = {nome: "higor", idade: 25, profissão: "Programador"}

console.log(dicionario);

dicionario.nome = "Gabriel";
console.log(dicionario);

dicionario.profissão = "Jornalista";
console.log(dicionario);
dicionario.nome = "José";
dicionario.idade = 35;
dicionario.profissão = "Pedreiro";
console.log(dicionario);