/*

Um JavaScript functionnão executa nenhuma verificação em valores de parâmetro (argumentos).

Parâmetros e argumentos da função
Anteriormente neste tutorial, você aprendeu que as funções podem ter parâmetros :

function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}

Parâmetros de função são os nomes listados na definição da função.

Os argumentos da função são os valores reais passados para (e recebidos por) a função.

Regras de Parâmetros
As definições de função JavaScript não especificam tipos de dados para parâmetros.

As funções JavaScript não executam verificação de tipo nos argumentos passados.

As funções JavaScript não verificam o número de argumentos recebidos.

Parâmetros padrão
Se uma função for chamada com argumentos ausentes (menos do que o declarado), os valores ausentes serão definidos como undefined.

Às vezes isso é aceitável, mas às vezes é melhor atribuir um valor padrão ao parâmetro:

Exemplo
Se y não for passado ou for indefinido, então y = 10.

function myFunction(x, y = 10) {
  return x + y;
}
myFunction(5);



Parâmetro de repouso da função
O parâmetro rest (...) permite que uma função trate um número indefinido de argumentos como uma matriz:

Exemplo
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);



O Objeto de Argumentos
As funções JavaScript têm um objeto interno chamado objeto de argumentos.

O objeto argumento contém uma matriz dos argumentos usados ​​quando a função foi chamada (invocada).

Dessa forma, você pode simplesmente usar uma função para encontrar (por exemplo) o valor mais alto em uma lista de números:

Exemplo
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
Ou crie uma função para somar todos os valores de entrada:

Exemplo
x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
Se uma função for chamada com muitos argumentos (mais do que o declarado), esses argumentos podem ser acessados usando o objeto de argumentos.



Argumentos são passados por valor
Os parâmetros, em uma chamada de função, são os argumentos da função.

Argumentos JavaScript são passados por valor : A função só conhece os valores, não os locais dos argumentos.

Se uma função altera o valor de um argumento, ela não altera o valor original do parâmetro.

As alterações nos argumentos não são visíveis (refletidas) fora da função.



Objetos são passados por referência
Em JavaScript, as referências de objetos são valores.

Por causa disso, os objetos se comportarão como se fossem passados por referência:

Se uma função altera uma propriedade de objeto, ela altera o valor original.

As alterações nas propriedades do objeto são visíveis (refletidas) fora da função.
*/