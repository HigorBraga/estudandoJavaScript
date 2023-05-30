/*

A switchinstrução é usada para executar diferentes ações com base em diferentes condições.

A instrução switch do JavaScript
Use a switchinstrução para selecionar um dos muitos blocos de código a serem executados.



switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}


É assim que funciona:

A expressão switch é avaliada uma vez.
O valor da expressão é comparado com os valores de cada caso.
Se houver uma correspondência, o bloco de código associado será executado.
Se não houver correspondência, o bloco de código padrão será executado.



A pausa palavra-chave
Quando o JavaScript atinge uma break palavra-chave, ele sai do bloco switch.

Isso interromperá a execução dentro do bloco switch.

Não é necessário quebrar o último caso em um bloco de switch. O bloco quebra (termina) lá de qualquer maneira.

Observação: se você omitir a instrução break, o próximo caso será executado mesmo que a avaliação não corresponda ao caso.


A palavra-chave padrão
A defaultpalavra-chave especifica o código a ser executado se não houver correspondência de maiúsculas e minúsculas.


Blocos de código comuns
Às vezes, você desejará que diferentes casos de switch usem o mesmo código.

Neste exemplo, o caso 4 e 5 compartilham o mesmo bloco de código e 0 e 6 compartilham outro bloco de código:

switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
};
*/

/*

Detalhes de troca
Se vários casos corresponderem a um valor de caso, o primeiro caso será selecionado.

Se nenhum caso correspondente for encontrado, o programa continua com o rótulo padrão .

Se nenhum rótulo padrão for encontrado, o programa continua com a(s) instrução(ões) após o switch .



Comparação estrita
Os casos de troca usam comparação estrita (===).

Os valores devem ser do mesmo tipo para corresponder.

Uma comparação estrita só pode ser verdadeira se os operandos forem do mesmo tipo.
*/