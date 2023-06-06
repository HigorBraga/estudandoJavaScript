/*

"use strict";Define que o código JavaScript deve ser executado em "modo estrito".

A Diretiva "use estrito"
A "use strict"diretiva era nova no ECMAScript versão 5.

Não é uma declaração, mas uma expressão literal, ignorada pelas versões anteriores do JavaScript.

O objetivo "use strict"é indicar que o código deve ser executado em "modo estrito".

Com o modo estrito, você não pode, por exemplo, usar variáveis não declaradas.

Todos os navegadores modernos suportam "usar estrito", exceto o Internet Explorer 9 e inferior



Você pode usar o modo estrito em todos os seus programas. Isso ajuda você a escrever um código mais limpo, como impedir que você use variáveis não declaradas.

"use strict"é apenas uma string, então o IE 9 não lançará um erro mesmo que não o entenda.


Declarando Modo Estrito
O modo estrito é declarado adicionando "usar estrito"; ao início de um script ou função.

Declarado no início de um script, tem escopo global (todo o código do script será executado em modo estrito).


Por que Modo Estrito?
O modo estrito torna mais fácil escrever JavaScript "seguro".

O modo estrito transforma a "sintaxe ruim" anteriormente aceita em erros reais.

Por exemplo, em JavaScript normal, digitar incorretamente um nome de variável cria uma nova variável global. No modo estrito, isso gerará um erro, impossibilitando a criação acidental de uma variável global.

Em JavaScript normal, um desenvolvedor não receberá nenhum feedback de erro atribuindo valores a propriedades não graváveis.

No modo estrito, qualquer atribuição a uma propriedade não gravável, uma propriedade somente getter, uma propriedade inexistente, uma variável inexistente ou um objeto inexistente gerará um erro.


A thispalavra-chave em funções se comporta de maneira diferente no modo estrito.

A thispalavra-chave refere-se ao objeto que chamou a função.

Se o objeto não for especificado, as funções em modo estrito retornarão undefinede as funções em modo normal retornarão o objeto global (janela).


Future Proof!
Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.

These are:

implements
interface
let
package
private
protected
public
static
yield


Atenção!
A diretiva "use strict" só é reconhecida no início de um script ou função.
*/