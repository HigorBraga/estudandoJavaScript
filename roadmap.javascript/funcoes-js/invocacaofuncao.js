/*

O código dentro de um JavaScript functionserá executado quando "algo" o invocar.



Invocando uma Função JavaScript
O código dentro de uma função não é executado quando a função é definida .

O código dentro de uma função é executado quando a função é invocada .

É comum usar o termo ' chamar uma função ' ao invés de ' invocar uma função '.

Também é comum dizer "chamar uma função", "iniciar uma função" ou "executar uma função".

Neste tutorial, usaremos invoke , pois uma função JavaScript pode ser invocada sem ser chamada.




Invocando uma função como uma função
Exemplo
function myFunction(a, b) {
  return a * b;
}
myFunction(10, 2);


A função acima não pertence a nenhum objeto. Mas em JavaScript sempre há um objeto global padrão.

Em HTML, o objeto global padrão é a própria página HTML, portanto, a função acima "pertence" à página HTML.

Em um navegador, o objeto da página é a janela do navegador. A função acima torna-se automaticamente uma função de janela.


Observação
Essa é uma maneira comum de invocar uma função JavaScript, mas não é uma prática muito boa.
Variáveis, métodos ou funções globais podem facilmente criar conflitos de nome e bugs no objeto global.


myFunction() e window.myFunction() é a mesma função.


O que é isso ?
Em JavaScript, a thispalavra-chave se refere a um objeto .

Qual objeto depende de como thisestá sendo invocado (usado ou chamado).

A thispalavra-chave refere-se a diferentes objetos dependendo de como é usada:

Em um método de objeto, thisrefere-se ao objeto .
Sozinho, thisrefere-se ao objeto global .
Em uma função, thisrefere-se ao objeto global .
Em uma função, no modo estrito, thisé undefined.
Em um evento, thisrefere-se ao elemento que recebeu o evento.
Métodos como call(), apply()e bind()podem se referir thisa qualquer objeto.


O objeto global
Quando uma função é chamada sem um objeto proprietário, o valor de this torna-se o objeto global.

Em um navegador da Web, o objeto global é a janela do navegador.

Este exemplo retorna o objeto window como o valor de this:

Exemplo
let x = myFunction();            // x will be the window object

function myFunction() {
  return this;
}


Invocar uma função como uma função global faz com que o valor de this seja o objeto global.
Usar o objeto window como uma variável pode facilmente travar seu programa.



Invocando uma função como um método
Em JavaScript, você pode definir funções como métodos de objeto.

O exemplo a seguir cria um objeto ( myObject ), com duas propriedades ( firstName e lastName ) e um método ( fullName ):

Exemplo
const myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
myObject.fullName();


O método fullName é uma função. A função pertence ao objeto. myObject é o proprietário da função.

A coisa chamada this, é o objeto que "possui" o código JavaScript. Nesse caso, o valor de this é myObject.

Invocar uma função como um método de objeto faz com que o valor de this seja o próprio objeto.


Invocando uma função com um construtor de função
Se uma chamada de função for precedida pela newpalavra-chave, é uma chamada de construtor.

Parece que você criou uma nova função, mas como as funções JavaScript são objetos, na verdade você cria um novo objeto:

Exemplo
// This is a function constructor:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}

// This creates a new object
const myObj = new myFunction("John", "Doe");

// This will return "John"
myObj.firstName;

Uma chamada de construtor cria um novo objeto. O novo objeto herda as propriedades e métodos de seu construtor.

A thispalavra-chave no construtor não tem um valor.
O valor de thisserá o novo objeto criado quando a função for invocada.
*/