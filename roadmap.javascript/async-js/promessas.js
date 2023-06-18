/*

"Eu prometo um resultado!"

"Produzir código" é um código que pode levar algum tempo

"Consumir código" é o código que deve aguardar o resultado

Uma promessa é um objeto JavaScript que vincula o código de produção e o código de consumo

Objeto de promessa JavaScript
Um objeto JavaScript Promise contém tanto o código de produção quanto as chamadas para o código de consumo.

*/

let minhaPromessa = new Promise(function(meuSucesso, meuErro) {
    meuSucesso();
    meuErro();
});


minhaPromessa.then(
    function(value) {
    console.log("Código com Sucesso");
},

    function(error) {
    console.log("Código com Erro");
});

/*

Quando o código produtor obtém o resultado, ele deve chamar um dos dois callbacks

Resultado	    Chamar
Sucesso	        myResolve(valor do resultado)
Erro	        myReject(objeto de erro)
*/

/*

Propriedades do Objeto de Promessa
Um objeto JavaScript Promise pode ser:

Pendente
Realizada
rejeitado
O objeto Promise suporta duas propriedades: state e result .

Enquanto um objeto Promise está "pendente" (funcionando), o resultado é indefinido.

Quando um objeto Promise é "cumprido", o resultado é um valor.

Quando um objeto Promise é "rejeitado", o resultado é um objeto de erro.


minhaPromessa.estado	    minhaPromessa.resultado
"pendente"	                indefinido
"realizada"	                um valor de resultado
"rejeitado"	                um objeto de erro


Você não pode acessar o estado e o resultado das propriedades da promessa .

Você deve usar um método Promise para lidar com promessas.



Prometa como fazer
Promise.then() recebe dois argumentos, um retorno de chamada para sucesso e outro para falha.

Ambos são opcionais, portanto, você pode adicionar um retorno de chamada apenas para sucesso ou falha.


Exemplos de promessa de JavaScript
Para demonstrar o uso de promessas, usaremos os exemplos de callback do capítulo anterior:

Esperando por um tempo limite
Esperando por um arquivo.
*/