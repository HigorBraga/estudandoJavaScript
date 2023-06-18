/*

"Vou terminar mais tarde!"

As funções executadas em paralelo com outras funções são chamadas assíncronas

Um bom exemplo é JavaScript setTimeout()

JavaScript assíncrono
Os exemplos usados no capítulo anterior, foram bem simplificados.

O objetivo dos exemplos era demonstrar a sintaxe das funções de retorno de chamada

No mundo real, os callbacks são usados com mais frequência com funções assíncronas.

Um exemplo típico é o JavaScript setTimeout().

Esperando por um tempo limite
Ao usar a função JavaScript setTimeout(), você pode especificar uma função de retorno de chamada para ser executada no tempo limite
*/


/*

No exemplo em html, myFunction é usado como retorno de chamada.

myFunction é passado setTimeout()como um argumento.

3000 é o número de milissegundos antes do tempo limite, portanto, myFunction()será chamado após 3 segundos.


Observação
Ao passar uma função como argumento, lembre-se de não usar parênteses.

Direita: setTimeout(minhaFunção, 3000);

Errado:setTimeout(minhaFunção(), 3000);

Em vez de passar o nome de uma função como argumento para outra função, você sempre pode passar uma função inteira.
*/


/*

Alternativas de retorno de chamada
Com a programação assíncrona, os programas JavaScript podem iniciar tarefas de execução longa e continuar executando outras tarefas em paralelo.

Mas, programas assíncronos são difíceis de escrever e difíceis de depurar.

Por causa disso, a maioria dos métodos JavaScript assíncronos modernos não usam retornos de chamada. Em vez disso, em JavaScript, a programação assíncrona é resolvida usando Promises .

Observação
Você aprenderá sobre promessas no próximo capítulo deste tutorial.

*/