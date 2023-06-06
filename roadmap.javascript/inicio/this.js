/*

O que é isso ?
Em JavaScript, a thispalavra-chave se refere a um objeto .

Qual objeto depende de como thisestá sendo invocado (usado ou chamado).

A thispalavra-chave refere-se a diferentes objetos dependendo de como é usada


Em um método de objeto, thisrefere-se ao objeto .
Sozinho, thisrefere-se ao objeto global .
Em uma função, thisrefere-se ao objeto global .
Em uma função, no modo estrito, thisé undefined.
Em um evento, thisrefere-se ao elemento que recebeu o evento.
Métodos como call(), apply()e bind()podem se referir thisa qualquer objeto.


Observação
thisnão é uma variável. É uma palavra-chave. Você não pode alterar o valor de this.


esta sozinho
Quando usado sozinho, thisrefere-se ao objeto global .

Porque thisestá sendo executado no escopo global.

Em uma janela do navegador, o objeto global é [object Window].


No modo estrito , quando usado sozinho, thistambém se refere ao objeto global.


isso em uma Função (Padrão)
Em uma função, o objeto global é a associação padrão para this.

Em uma janela do navegador, o objeto global é [object Window].


isso em uma Função (Strict)
O modo estrito do JavaScript não permite vinculação padrão.

Portanto, quando usado em uma função, no modo estrito, thisé undefined.


isso em manipuladores de eventos
Em manipuladores de eventos HTML, thisrefere-se ao elemento HTML que recebeu o evento.


Esta Precedência
Para determinar a qual objeto thisse refere; use a seguinte precedência de ordem.

Precedência	        Objeto
1	                vincular()
2	                aplicar() e chamar()
3	                Método de objeto
4	                Âmbito global
*/