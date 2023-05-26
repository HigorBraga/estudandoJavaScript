/*

    Por padrão, o JavaScript exibe números como decimais de base 10 .

    Mas você pode usar o toString()método para gerar números da base 2 à base 36 .

    Hexadecimal é a base 16 . Decimal é base 10 . Octal é base 8 . Binário é base 2 .


    let myNumber = 32;
    myNumber.toString(32);
    myNumber.toString(16);
    myNumber.toString(12);
    myNumber.toString(10);
    myNumber.toString(8);
    myNumber.toString(2);
*/


console.log("=========================================================================");


// BigInt

/*

    Em JavaScript, todos os números são armazenados em um formato de ponto flutuante de 64 bits (padrão IEEE 754).

    Com esse padrão, números inteiros grandes não podem ser representados com exatidão e serão arredondados.

    Por causa disso, o JavaScript só pode representar números inteiros com segurança:

    Até 9007199254740991 +(2 53 -1)

    e

    Até -9007199254740991 -(2 53 -1).

    Valores inteiros fora desse intervalo perdem a precisão.

    Como criar um BigInt
    Para criar um BigInt, anexe n ao final de um inteiro ou chame BigInt():
*/



console.log("=========================================================================");

/*

    Números inteiros seguros mínimos e máximos
    ES6 adicionou propriedades max e min ao objeto Number:

    MAX_SAFE_INTEGER
    MIN_SAFE_INTEGER


    Novos métodos numéricos
    O ES6 também adicionou 2 novos métodos ao objeto Number:

    Number.isInteger()
    Number.isSafeInteger()

    O método Number.isInteger()
    O Number.isInteger()método retorna truese o argumento for um número inteiro.

    O método Number.isSafeInteger()
    Um inteiro seguro é um inteiro que pode ser representado exatamente como um número de precisão dupla.

    O Number.isSafeInteger()método retorna truese o argumento for um inteiro seguro.

    Inteiros seguros são todos os inteiros de -(2 53 - 1) a +(2 53 - 1).
    Este é seguro: 9007199254740991. Não é seguro: 9007199254740992.
*/