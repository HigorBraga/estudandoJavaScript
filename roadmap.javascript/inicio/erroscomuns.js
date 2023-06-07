/*

Uso acidental do operador de atribuição
Os programas JavaScript podem gerar resultados inesperados se um programador usar acidentalmente um operador de atribuição ( = ), em vez de um operador de comparação ( ==) em uma instrução if.


Uma atribuição sempre retorna o valor da atribuição.
*/


/*

Esperando uma comparação frouxa
Na comparação regular, o tipo de dados não importa

*/

/*

É um erro comum esquecer que switchas declarações usam comparação estrita.

*/

/*

Adição e concatenação confusas
Adição é somar números .

A concatenação consiste em adicionar strings .

Em JavaScript, ambas as operações usam o mesmo +operador.

Por causa disso, adicionar um número como um número produzirá um resultado diferente de adicionar um número como uma string.

*/

/*

Flutuações mal-entendidas
Todos os números em JavaScript são armazenados como números de ponto flutuante de 64 bits (Floats).

Todas as linguagens de programação, incluindo JavaScript, têm dificuldades com valores de ponto flutuante precisos


Para resolver o problema acima, ajuda multiplicar e dividir.

let z = (x * 10 + y * 10) / 10; 
*/

/*

Quebrando uma String JavaScript
O JavaScript permitirá que você quebre uma instrução em duas linhas

*/

/*

Você deve usar uma "barra invertida" se precisar quebrar uma instrução em uma string

*/

/*

Quebrando uma declaração de retorno
É um comportamento padrão do JavaScript fechar uma instrução automaticamente no final de uma linha.


O JavaScript também permitirá que você divida uma instrução em duas linhas.


Isso acontece porque as instruções de fechamento (finalização) com ponto e vírgula são opcionais em JavaScript.

O JavaScript fechará a instrução return no final da linha, porque é uma instrução completa.

Nunca interrompa uma instrução de retorno.
*/



/*

Isso acontece porque as instruções de fechamento (finalização) com ponto e vírgula são opcionais em JavaScript.

O JavaScript fechará a instrução return no final da linha, porque é uma instrução completa.

Nunca interrompa uma instrução de retorno.

*/


/*

Acessando Arrays com Índices Nomeados
Muitas linguagens de programação oferecem suporte a arrays com índices nomeados.

Arrays com índices nomeados são chamados de arrays associativos (ou hashes).

JavaScript não suporta arrays com índices nomeados.

Em JavaScript, arrays usam índices numerados.


Em JavaScript, os objetos usam índices nomeados .

Se você usar um índice nomeado, ao acessar um array, o JavaScript irá redefinir o array para um objeto padrão.

Após a redefinição automática, os métodos e propriedades da matriz produzirão resultados indefinidos ou incorretos.

*/


/*

AVISO !!

O Internet Explorer 8 travará.

JSON não permite vírgulas à direita.

*/


/*

Indefinido não é nulo
Objetos, variáveis, propriedades e métodos JavaScript podem ser arquivos undefined.

Além disso, objetos JavaScript vazios podem ter o valor null.

Isso pode tornar um pouco difícil testar se um objeto está vazio.

Você pode testar se um objeto existe testando se o tipo é undefined.

*/