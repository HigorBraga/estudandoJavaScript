/*

As funções de seta foram introduzidas no ES6.

As funções de seta nos permitem escrever uma sintaxe de função mais curta.

Exemplo:
let myFunction = (a, b) => a * b;


Fica mais curto! Se a função tiver apenas uma instrução e a instrução retornar um valor, você poderá remover os colchetes e a returnpalavra-chave:
hello = () => "Hello World!";
Observação: isso funciona apenas se a função tiver apenas uma instrução.




Se você tiver parâmetros, passe-os entre parênteses:
hello = (val) => "Hello " + val;

Na verdade, se você tiver apenas um parâmetro, também poderá pular os parênteses:
hello = val => "Hello " + val;


Sobre o quê this?
A manipulação thistambém é diferente nas funções de seta em comparação com as funções regulares.

Resumindo, com funções de seta não há vinculação de this.

Em funções regulares, a thispalavra-chave representa o objeto que chamou a função, que pode ser a janela, o documento, um botão ou o que quer que seja.

Com funções de seta, a thispalavra-chave sempre representa o objeto que definiu a função de seta.

Lembre-se dessas diferenças quando estiver trabalhando com funções. Às vezes, o comportamento das funções regulares é o que você deseja, caso contrário, use as funções de seta.
*/