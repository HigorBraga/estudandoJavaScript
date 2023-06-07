/*

Evite variáveis globais, evite new, evite ==, eviteeval()



Evite variáveis globais
Minimize o uso de variáveis globais.

Isso inclui todos os tipos de dados, objetos e funções.

Variáveis e funções globais podem ser substituídas por outros scripts.

Em vez disso, use variáveis locais e aprenda a usar encerramentos .
*/



/*

Sempre declare variáveis locais
Todas as variáveis usadas em uma função devem ser declaradas como variáveis locais .

As variáveis locais devem ser declaradas com a palavra-chave var, the letou const, caso contrário, elas se tornarão variáveis globais.

*/



/*

Declarações no Topo
É uma boa prática de codificação colocar todas as declarações no início de cada script ou função.

Isso vai:

Dê um código mais limpo
Forneça um único local para procurar variáveis locais
Tornar mais fácil evitar variáveis globais indesejadas (implícitas)
Reduzir a possibilidade de redeclarações indesejadas

*/


/*

Inicializar Variáveis
É uma boa prática de codificação inicializar variáveis ao declará-las.

Isso vai:

Dê um código mais limpo
Forneça um único local para inicializar variáveis
Evite valores indefinidos


A inicialização de variáveis fornece uma ideia do uso pretendido (e do tipo de dados pretendido).
*/


/*

Declarar objetos com const
Declarar objetos com const evitará qualquer mudança acidental de tipo


Declarar Arrays com const
Declarar arrays com const evitará qualquer mudança acidental de tipo
*/



/*

Não use new Object ()
Usar ""em vez denew String()
Usar 0em vez denew Number()
Usar falseem vez denew Boolean()
Usar {}em vez denew Object()
Usar []em vez denew Array()
Usar /()/em vez denew RegExp()
Usar function (){}em vez denew Function()


let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean
const x4 = {};           // new object
const x5 = [];           // new array object
const x6 = /()/;         // new regexp object
const x7 = function(){}; // new function object
*/



/*

Cuidado com as conversões automáticas de tipo
JavaScript é digitado livremente.

Uma variável pode conter todos os tipos de dados.

Uma variável pode alterar seu tipo de dados

*/



/*

Use === Comparação
O == operador de comparação sempre converte (para tipos correspondentes) antes da comparação.

O === operador força a comparação de valores e tipo

*/



/*

Usar padrões de parâmetros
Se uma função for chamada com um argumento ausente, o valor do argumento ausente será definido como undefined.

Valores indefinidos podem quebrar seu código. É um bom hábito atribuir valores padrão aos argumentos.


function (a=1, b=1) { 'function code' }
*/


/*

Termine seus interruptores com padrões
Sempre termine suas switchdeclarações com um default. Mesmo que você ache que não há necessidade disso.

*/



/*

Evite números, strings e booleanos como objetos
Sempre trate números, strings ou booleanos como valores primitivos. Não como objetos.

Declarar esses tipos como objetos diminui a velocidade de execução e produz efeitos colaterais desagradáveis

*/


/*

Evite usar eval ()
A eval()função é usada para executar texto como código. Em quase todos os casos, não deve ser necessário usá-lo.

Por permitir a execução de código arbitrário, também representa um problema de segurança.

*/