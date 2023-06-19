/*

O método addEventListener()
Exemplo
Adicione um ouvinte de evento que é acionado quando um usuário clica em um botão:

document.getElementById("myBtn").addEventListener("click", displayDate);


O addEventListener()método anexa um manipulador de eventos ao elemento especificado.

O addEventListener()método anexa um manipulador de eventos a um elemento sem sobrescrever os manipuladores de eventos existentes.

Você pode adicionar muitos manipuladores de eventos a um elemento.

Você pode adicionar muitos manipuladores de eventos do mesmo tipo a um elemento, ou seja, dois eventos de "clique".

Você pode adicionar ouvintes de eventos a qualquer objeto DOM, não apenas a elementos HTML. ou seja, o objeto janela.

O addEventListener()método facilita o controle de como o evento reage ao borbulhamento.

Ao usar o addEventListener()método, o JavaScript é separado da marcação HTML, para melhor legibilidade e permite adicionar ouvintes de eventos mesmo quando você não controla a marcação HTML.

Você pode remover facilmente um ouvinte de evento usando o removeEventListener()método.

*/

/*

Sintaxe
element.addEventListener(event, function, useCapture);
O primeiro parâmetro é o tipo do evento (como " click" ou " mousedown" ou qualquer outro Evento HTML DOM .)

O segundo parâmetro é a função que queremos chamar quando o evento ocorrer.

O terceiro parâmetro é um valor booleano que especifica se é para usar bolhas de eventos ou captura de eventos. Este parâmetro é opcional.

Observe que você não usa o prefixo "on" para o evento; use " click" em vez de " onclick".

*/

/*

Adicionar um manipulador de eventos a um elemento
Exemplo
Alerta "Olá, Mundo!" quando o usuário clica em um elemento:

element.addEventListener("click", function(){ alert("Hello World!"); });
Você também pode se referir a uma função "nomeada" externa:

Exemplo
Alerta "Olá, Mundo!" quando o usuário clica em um elemento:

element.addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}

*/


/*

Adicionar muitos manipuladores de eventos ao mesmo elemento
O addEventListener()método permite adicionar muitos eventos ao mesmo elemento, sem sobrescrever os eventos existentes.

*/

/*

Adicione um manipulador de eventos ao objeto da janela
O addEventListener()método permite adicionar ouvintes de eventos em qualquer objeto HTML DOM, como elementos HTML, o documento HTML, o objeto janela ou outros objetos que oferecem suporte a eventos, como o xmlHttpRequestobjeto.

Exemplo
Adicione um ouvinte de evento que é acionado quando um usuário redimensiona a janela:

window.addEventListener("resize", function(){
  document.getElementById("demo").innerHTML = sometext;
});


Passando Parâmetros
Ao passar valores de parâmetro, use uma "função anônima" que chama a função especificada com os parâmetros:

Exemplo
element.addEventListener("click", function(){ myFunction(p1, p2); });
*/

/*

Bubbling de eventos ou captura de eventos?
Existem duas formas de propagação de eventos no HTML DOM, bubbling e capture.

A propagação de eventos é uma forma de definir a ordem dos elementos quando um evento ocorre. Se você tiver um elemento <p> dentro de um elemento <div> e o usuário clicar no elemento <p>, o evento "click" de qual elemento deve ser tratado primeiro?

Ao borbulhar, o evento do elemento mais interno é tratado primeiro e depois o externo: o evento click do elemento <p> é tratado primeiro, depois o evento click do elemento <div>.

Ao capturar o evento do elemento mais externo é tratado primeiro e depois o interno: o evento click do elemento <div> será tratado primeiro, então o evento click do elemento <p>.

Com o método addEventListener() você pode especificar o tipo de propagação usando o parâmetro "useCapture":

addEventListener(event, function, useCapture);
O valor padrão é false, que usará a propagação bubbling, quando o valor for true, o evento usará a propagação de captura.

*/

/*

O método removeEventListener()
O removeEventListener()método remove manipuladores de eventos que foram anexados com o método addEventListener():

*/