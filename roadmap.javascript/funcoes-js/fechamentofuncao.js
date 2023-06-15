/*

Variáveis JavaScript podem pertencer ao escopo local ou global .

As variáveis globais podem se tornar locais (privadas) com encerramentos .



Variáveis globais
A functionpode acessar todas as variáveis definidas dentro da função, assim:

Exemplo
function myFunction() {
  let a = 4;
  return a * a;
}
Mas a functiontambém pode acessar variáveis definidas fora da função, assim:

Exemplo
let a = 4;
function myFunction() {
  return a * a;
}

No último exemplo, a é uma variável global .

Em uma página da Web, as variáveis globais pertencem à página.

As variáveis globais podem ser usadas (e alteradas) por todos os outros scripts na página.

No primeiro exemplo, a é uma variável local .

Uma variável local só pode ser usada dentro da função onde é definida. Ele fica oculto para outras funções e outros códigos de script.

Variáveis globais e locais com o mesmo nome são variáveis diferentes. Modificando um, não modifica o outro.

Observação
Variáveis criadas sem uma palavra-chave de declaração ( var, letou const) são sempre globais, mesmo que sejam criadas dentro de uma função.


Vida útil variável
Variáveis globais vivem até que a página seja descartada, como quando você navega para outra página ou fecha a janela.

As variáveis locais têm vidas curtas. Eles são criados quando a função é invocada e excluídos quando a função é concluída.

Um contradilema
Suponha que você queira usar uma variável para contar alguma coisa e que esse contador esteja disponível para todas as funções.

Você pode usar uma variável global e um function para aumentar o contador


// Initiate counter
let counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

// The counter should now be 3
Há um problema com a solução acima: Qualquer código na página pode alterar o contador, sem chamar add().

O contador deve ser local para a add()função, para evitar que outro código o altere:

Exemplo
// Initiate counter
let counter = 0;

// Function to increment counter
function add() {
  let counter = 0;
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

//The counter should now be 3. But it is 0
Não funcionou porque exibimos o contador global em vez do contador local.

Podemos remover o contador global e acessar o contador local deixando a função retorná-lo:

Exemplo
// Function to increment counter
function add() {
  let counter = 0;
  counter += 1;
  return counter;
}

// Call add() 3 times
add();
add();
add();

//The counter should now be 3. But it is 1.
Não funcionou porque reinicializamos o contador local toda vez que chamamos a função.

 Uma função interna do JavaScript pode resolver isso.


 Funções aninhadas de JavaScript
Todas as funções têm acesso ao escopo global.  

Na verdade, em JavaScript, todas as funções têm acesso ao escopo "acima" delas.

JavaScript suporta funções aninhadas. As funções aninhadas têm acesso ao escopo "acima" delas.

Neste exemplo, a função interna plus()tem acesso à countervariável na função pai:

Exemplo
function add() {
  let counter = 0;
  function plus() {counter += 1;}
  plus();   
  return counter;
}
Isso poderia ter resolvido o contradilema, se pudéssemos alcançar a plus() função de fora.

Também precisamos encontrar uma maneira de executar counter = 0apenas uma vez.

Precisamos de um encerramento.


Fechamentos de JavaScript
Lembra das funções de auto-invocação? O que essa função faz?

Exemplo
const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();

// the counter is now 3
Exemplo explicado
A variável addé atribuída ao valor de retorno de uma função de auto-invocação.

A função de auto-invocação é executada apenas uma vez. Ele define o contador como zero (0) e retorna uma expressão de função.

Dessa forma, add se torna uma função. A parte "maravilhosa" é que ele pode acessar o contador no escopo pai.

Isso é chamado de fechamento de JavaScript. Permite que uma função tenha variáveis ' privadas '.

O contador é protegido pelo escopo da função anônima e só pode ser alterado usando a função add.

Um fechamento é uma função que tem acesso ao escopo pai, mesmo depois que a função pai foi fechada.
*/