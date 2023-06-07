/*

Erros podem (vão) acontecer toda vez que você escrever algum novo código de computador.

Depuração de código
O código de programação pode conter erros de sintaxe ou erros lógicos.

Muitos desses erros são difíceis de diagnosticar.

Muitas vezes, quando o código de programação contém erros, nada acontece. Não há mensagens de erro e você não receberá indicações de onde procurar erros.

Procurar (e corrigir) erros no código de programação é chamado de depuração de código.



Depuradores JavaScript
A depuração não é fácil. Mas, felizmente, todos os navegadores modernos possuem um depurador JavaScript integrado.

Os depuradores integrados podem ser ativados e desativados, forçando os erros a serem relatados ao usuário.

Com um depurador, você também pode definir pontos de interrupção (lugares onde a execução do código pode ser interrompida) e examinar variáveis enquanto o código está sendo executado.

Normalmente (caso contrário, siga as etapas na parte inferior desta página), você ativa a depuração em seu navegador com a tecla F12 e seleciona "Console" no menu do depurador.

*/


let x = 15 * 10;
debugger;

console.log(x);


/*

A palavra-chave do depurador
A debuggerpalavra-chave interrompe a execução do JavaScript e chama (se disponível) a função de depuração.

Isso tem a mesma função de definir um ponto de interrupção no depurador.

Se nenhuma depuração estiver disponível, a instrução do depurador não terá efeito.

*/


/*

Você sabia?
Depuração é o processo de testar, encontrar e reduzir bugs (erros) em programas de computador.
O primeiro bug de computador conhecido foi um bug real (um inseto) preso na eletrônica.

*/