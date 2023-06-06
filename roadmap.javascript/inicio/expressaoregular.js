/*

    Uma expressão regular é uma sequência de caracteres que forma um padrão de pesquisa.

    O padrão de pesquisa pode ser usado para pesquisa de texto e operações de substituição de texto.



    O que é uma expressão regular?
    Uma expressão regular é uma sequência de caracteres que forma um padrão de pesquisa .

    Ao pesquisar dados em um texto, você pode usar esse padrão de pesquisa para descrever o que está procurando.

    Uma expressão regular pode ser um único caractere ou um padrão mais complicado.

    As expressões regulares podem ser usadas para executar todos os tipos de pesquisa de texto e operações de substituição de texto .

    Sintaxe
    /pattern/modifiers;

*/


/*

Usando Métodos de String
Em JavaScript, as expressões regulares costumam ser usadas com os dois métodos de string : search()e replace().

O search()método usa uma expressão para procurar uma correspondência e retorna a posição da correspondência.

O replace()método retorna uma string modificada onde o padrão é substituído.

*/


let texto = "Estudando JavaScript";
let procura = texto.search("JavaScript");
console.log(procura);

// Usando expressão regular
let texto2 = "Vale a pena aprender javascript";
let procura2 = texto2.search(/javascript/i);
console.log(procura2);


// Usando replace
let texto3 = "Visite meu site pelo Google Chrome";
let procura3 = texto3.replace("Google Chrome", "Edge");
console.log(procura3);

// Usando replace com expressão regular
let texto4 = "Baixe meu aplicativo pelo Flatpak";
let procura4 = texto4.replace(/flatpak/i, "Google Play");
console.log(procura4);


/*

Usando teste()
O test()método é um método de expressão RegExp.

Ele procura um padrão em uma string e retorna verdadeiro ou falso, dependendo do resultado.

*/

const verifica = /a/i;
console.log(verifica.test("Amanha eu vou ficar em casa estudadando"));
// Você não precisa colocar a expressão regular em uma variável primeiro


/*

Usando exec()
O exec()método é um método de expressão RegExp.

Ele procura uma string por um padrão especificado e retorna o texto encontrado como um objeto.

Se nenhuma correspondência for encontrada, ele retornará um objeto vazio (nulo) .

*/

let letra = /a/;
console.log(letra.exec("Amanhã eu ficarei em casa"));