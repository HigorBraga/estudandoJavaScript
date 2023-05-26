let texto1 = 'A minha casa agora é roxa';
let index = texto1.indexOf('casa');
console.log(index);

// O indexOf()método retorna o índice (posição) da primeira ocorrência de uma string em uma string:

let texto2 = texto1.lastIndexOf('agora');
console.log(texto2);

// O lastIndexOf()método retorna o índice (posição) da última ocorrência de uma string em uma string:

// Ambos indexOf(), e lastIndexOf()retornam -1 se o texto não for encontrado:

// Ambos os métodos aceitam um segundo parâmetro como posição inicial para a pesquisa:

let texto3 = texto1.search('agora');
console.log(texto3);

texto4 = texto1.matchAll("ago");
console.log(texto4);

texto5 = texto1.match("ago");
console.log(texto5);

texto6  = texto1.includes('agora');
console.log(texto6);

texto7 = texto1.startsWith('casa');
console.log(texto7);

texto8 = texto1.endsWith('casa');
console.log(texto8);