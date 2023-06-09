/*

"Eu vou ligar de volta mais tarde!"

Um callback é uma função passada como um argumento para outra função

Esta técnica permite que uma função chame outra função

Uma função de retorno de chamada pode ser executada após a conclusão de outra função

Sequência de funções
As funções JavaScript são executadas na sequência em que são chamadas. Não na sequência em que são definidos.

Este exemplo acabará exibindo "Adeus":

*/

function calculadora(num1, num2) {
    let soma = num1 + num2;
    return soma;
}

function resultado() {
    console.log(calculadora(5, 2));
    console.log(calculadora(6, 3));
}

resultado();


/*

O problema com o primeiro exemplo acima é que você precisa chamar duas funções para exibir o resultado.

O problema com o segundo exemplo é que você não pode impedir que a função calculadora exiba o resultado.

Agora é hora de trazer um retorno de chamada.


Chamadas de retorno de JavaScript
Um retorno de chamada é uma função passada como um argumento para outra função.

Usando um retorno de chamada, você pode chamar a função de calculadora ( myCalculator) com um retorno de chamada ( myCallback) e deixar a função de calculadora executar o retorno de chamada após o término do cálculo:


No exemplo acima, myDisplayeré chamada de função callback .

É passado myCalculator()como um argumento .

Observação
Ao passar uma função como argumento, lembre-se de não usar parênteses.

Direita: minhaCalculadora(5, 5, meuDisplay);

Errado:minhaCalculadora(5, 5, meuDisplay());
*/


