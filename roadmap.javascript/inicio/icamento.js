/*

Hoisting é o comportamento padrão do JavaScript de mover as declarações para o topo.

Declarações de JavaScript são suspensas
Em JavaScript, uma variável pode ser declarada após ter sido usada.

Em outras palavras; uma variável pode ser usada antes de ser declarada.


Hoisting é o comportamento padrão do JavaScript de mover todas as declarações para o topo do escopo atual (para o topo do script atual ou da função atual).



As palavras-chave let e const
Variáveis definidas com lete constsão levantadas para o topo do bloco, mas não inicializadas .

Significado: O bloco de código está ciente da variável, mas não pode ser usado até que seja declarado.

Usar uma letvariável antes de ser declarada resultará em um arquivo ReferenceError.


Declare suas variáveis no topo!
Hoisting é (para muitos desenvolvedores) um comportamento desconhecido ou negligenciado do JavaScript.

Se um desenvolvedor não entender de hoisting, os programas podem conter bugs (erros).

Para evitar bugs, sempre declare todas as variáveis no início de cada escopo.

Como é assim que o JavaScript interpreta o código, é sempre uma boa regra.

O JavaScript em modo estrito não permite o uso de variáveis se não forem declaradas.
Estude "use estrito" no próximo capítulo.
*/