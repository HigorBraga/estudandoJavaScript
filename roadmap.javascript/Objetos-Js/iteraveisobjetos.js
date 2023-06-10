/*


Objetos iteráveis são objetos que podem ser iterados com for..of.

Tecnicamente, os iteráveis devem implementar o Symbol.iteratormétodo.


Iterando sobre uma string
Você pode usar um for..ofloop para iterar sobre os elementos de uma string:


Iterando sobre um array
Você pode usar um for..ofloop para iterar sobre os elementos de um Array.




Iteradores de JavaScript
O protocolo iterador define como produzir uma sequência de valores de um objeto.

Um objeto se torna um iterador quando implementa um next()método.

O next()método deve retornar um objeto com duas propriedades:

valor (o próximo valor)
feito (verdadeiro ou falso)
valor	O valor retornado pelo iterador
(pode ser omitido se feito for verdadeiro)
feito	true se o iterador tiver concluído
false se o iterador produzir um novo valor




Iterável feito em casa
Este iterável retorna sem fim: 10,20,30,40,.... Toda vez next()é chamado

O problema com uma casa tornada iterável:

Ele não oferece suporte à for..ofinstrução JavaScript.



Um JavaScript iterável é um objeto que possui um Symbol.iterator .

O Symbol.iteratoré uma função que retorna uma next()função.

Um iterável pode ser iterado com o código:for (const x of iterable) { }

O método Symbol.iterator é chamado automaticamente por for..of.


*/