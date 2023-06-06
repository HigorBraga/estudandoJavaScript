/*

O escopo determina a acessibilidade (visibilidade) das variáveis.

JavaScript tem 3 tipos de escopo:

Escopo do bloco
escopo da função
Âmbito global


Escopo do bloco
Antes do ES6 (2015), o JavaScript tinha apenas escopo global e escopo de função .

O ES6 introduziu duas novas palavras-chave importantes do JavaScript: lete const.

Essas duas palavras-chave fornecem escopo de bloco em JavaScript.

Variáveis declaradas dentro de um bloco { } não podem ser acessadas de fora do bloco:


Variáveis locais têm escopo de função :

Eles só podem ser acessados de dentro da função.


Como variáveis locais só são reconhecidas dentro de suas funções, variáveis com o mesmo nome podem ser utilizadas em funções diferentes.

As variáveis locais são criadas quando uma função é iniciada e excluídas quando a função é concluída.



Uma variável global tem escopo global :

Todos os scripts e funções em uma página da Web podem acessá-la.


Variáveis JavaScript
Em JavaScript, objetos e funções também são variáveis.
O escopo determina a acessibilidade de variáveis, objetos e funções de diferentes partes do código.


Automaticamente Global
Se você atribuir um valor a uma variável que não foi declarada, ela se tornará automaticamente uma variável GLOBAL .

Este exemplo de código declarará uma variável global carName, mesmo que o valor seja atribuído dentro de uma função.


myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
}



modo estrito
Todos os navegadores modernos suportam a execução de JavaScript no "Modo estrito".

Você aprenderá mais sobre como usar o modo estrito em um capítulo posterior deste tutorial.

No "Modo Estrito", as variáveis não declaradas não são automaticamente globais.



Variáveis globais em HTML
Com JavaScript, o escopo global é o ambiente JavaScript.

Em HTML, o escopo global é o objeto janela.

As variáveis globais definidas com a varpalavra-chave pertencem ao objeto janela.

As variáveis globais definidas com a letpalavra-chave não pertencem ao objeto janela


NÃO crie variáveis globais, a menos que pretenda.

Suas variáveis globais (ou funções) podem sobrescrever variáveis de janela (ou funções).
Qualquer função, incluindo o objeto window, pode sobrescrever suas variáveis e funções globais.


O tempo de vida das variáveis JavaScript
O tempo de vida de uma variável JavaScript começa quando ela é declarada.

As variáveis de função (locais) são excluídas quando a função é concluída.

Em um navegador da Web, as variáveis globais são excluídas quando você fecha a janela (ou guia) do navegador.


Argumentos da função
Argumentos de função (parâmetros) funcionam como variáveis locais dentro de funções.
*/