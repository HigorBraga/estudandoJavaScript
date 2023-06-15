/*

As funções JavaScript são definidas com a functionpalavra-chave.

Você pode usar uma declaração de função ou uma expressão de função .




Declarações de função
Anteriormente neste tutorial, você aprendeu que as funções são declaradas com a seguinte sintaxe:

function functionName(parameters) {
  // code to be executed
}
As funções declaradas não são executadas imediatamente. Eles são "guardados para uso posterior" e serão executados posteriormente, quando forem invocados (chamados).

Exemplo
function myFunction(a, b) {
  return a * b;
}


Ponto e vírgula são usados para separar instruções JavaScript executáveis.
Como uma declaração de função não é uma instrução executável, não é comum finalizá-la com um ponto e vírgula.

Expressões de função
Uma função JavaScript também pode ser definida usando uma expressão .

Uma expressão de função pode ser armazenada em uma variável:

Exemplo
const x = function (a, b) {return a * b};

Após uma expressão de função ter sido armazenada em uma variável, a variável pode ser usada como uma função:

Exemplo
const x = function (a, b) {return a * b};
let z = x(4, 3);

A função acima é na verdade uma função anônima (uma função sem nome).

Funções armazenadas em variáveis não precisam de nomes de função. Eles são sempre invocados (chamados) usando o nome da variável.

A função acima termina com um ponto e vírgula porque faz parte de uma instrução executável.



O Construtor Function()
Como você viu nos exemplos anteriores, as funções JavaScript são definidas com a functionpalavra-chave.

As funções também podem ser definidas com um construtor de função JavaScript integrado chamado Function().

Exemplo
const myFunction = new Function("a", "b", "return a * b");

let x = myFunction(4, 3);
Na verdade, você não precisa usar o construtor de função. O exemplo acima é o mesmo que escrever:

Exemplo
const myFunction = function (a, b) {return a * b};

let x = myFunction(4, 3);


função de elevação
Anteriormente neste tutorial, você aprendeu sobre "elevação" ( JavaScript Hoisting ).

Hoisting é o comportamento padrão do JavaScript de mover as declarações para o topo do escopo atual.

A elevação aplica-se a declarações de variáveis e declarações de função.

Por causa disso, as funções JavaScript podem ser chamadas antes de serem declaradas:

myFunction(5);

function myFunction(y) {
  return y * y;
}
As funções definidas usando uma expressão não são suspensas.


Funções de auto-invocação
As expressões de função podem se tornar "auto-invocadas".

Uma expressão de auto-invocação é invocada (iniciada) automaticamente, sem ser chamada.

As expressões de função serão executadas automaticamente se a expressão for seguida por ().

Você não pode auto-invocar uma declaração de função.

Você precisa adicionar parênteses ao redor da função para indicar que é uma expressão de função:

Exemplo
(function () {
  let x = "Hello!!";  // I will invoke myself
})();


As funções podem ser usadas como valores
Funções JavaScript podem ser usadas como valores:

Exemplo
function myFunction(a, b) {
  return a * b;
}

let x = myFunction(4, 3);
Funções JavaScript podem ser usadas em expressões:

Exemplo
function myFunction(a, b) {
  return a * b;
}

let x = myFunction(4, 3) * 2;


Funções são Objetos
O typeofoperador em JavaScript retorna "função" para funções.

Mas as funções JavaScript podem ser melhor descritas como objetos.

As funções JavaScript têm propriedades e métodos .

A arguments.lengthpropriedade retorna o número de argumentos recebidos quando a função foi invocada.

Uma função definida como a propriedade de um objeto é chamada de método para o objeto.
Uma função projetada para criar novos objetos é chamada de construtor de objeto.



Funções de seta
As funções de seta permitem uma sintaxe curta para escrever expressões de função.

Você não precisa da functionpalavra-chave, da returnpalavra-chave e das chaves .

Exemplo
// ES5
var x = function(x, y) {
  return x * y;
}

// ES6
const x = (x, y) => x * y;


As funções de seta não têm suas próprias funções this. Eles não são adequados para definir métodos de objeto .

As funções de seta não são suspensas. Eles devem ser definidos antes de serem usados.

Usar const é mais seguro do que usar var, porque uma expressão de função é sempre um valor constante.

Você só pode omitir a returnpalavra-chave e as chaves se a função for uma única instrução. Por isso, pode ser um bom hábito mantê-los sempre:

Exemplo
const x = (x, y) => { return x * y };
*/