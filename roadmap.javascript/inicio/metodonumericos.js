/*

    Métodos numéricos JavaScript
    Esses métodos numéricos podem ser usados ​​em todos os números JavaScript:

    Método              Descrição
    para sequenciar()	Retorna um número como uma string
    paraExponencial()	Retorna um número escrito em notação exponencial
    toFixed()	        Retorna um número escrito com um número de casas decimais
    toPrecision()	    Retorna um número escrito com um comprimento especificado
    Valor de()	        Retorna um número como um número

*/

/*

    O método toString()
    O toString()método retorna um número como uma string.

    Todos os métodos numéricos podem ser usados em qualquer tipo de número (literais, variáveis ou expressões):

*/

let x = 123;
console.log(x.toString()); // convertido para string

/*

    O método toExponential()
    toExponential()retorna uma string, com um número arredondado e escrito usando a notação exponencial.

    Um parâmetro define o número de caracteres atrás do ponto decimal:

*/

let z = 9.566;
console.log(z.toExponential(2)); // convertido para string com notação exponencial
console.log(z.toExponential(4)); // convertido para string com notação exponencial
console.log(z.toExponential(6)); // convertido para string com notação exponencial


/*

    O método toFixed()
    toFixed()retorna uma string, com o número escrito com um número especificado de casas decimais:

    toFixed(2)é perfeito para trabalhar com dinheiro.

*/

let t = 8.956;
console.log(t.toFixed(2)); // convertido para string com um número de casas decimais


/*

    O método toPrecision()
    toPrecision()retorna uma string, com um número escrito com um comprimento especificado:

*/

let m = 7.456;
console.log(m.toPrecision()); // converte para string com comprimento de número especifico
console.log(m.toPrecision(2)); // converte para string com comprimento de número especifico
console.log(m.toPrecision(4)); // converte para string com comprimento de número especifico
console.log(m.toPrecision(6)); // converte para string com comprimento de número especifico


/*

    O método valueOf()
    O valueOf()método retorna um número como um número.

*/

let r = 789;
console.log(r.valueOf()); // retorna um número como um número
console.log((456).valueOf());

/*

    Em JavaScript, um número pode ser um valor primitivo (typeof = number) ou um objeto (typeof = object).

    O valueOf()método é usado internamente em JavaScript para converter objetos Number em valores primitivos.

    Não há razão para usá-lo em seu código.

*/

/*

    Métodos de objeto de número
    Esses métodos de objeto pertencem ao objeto Number :

    Método	                Descrição
    Number.isInteger()	    Retorna verdadeiro se o argumento for um número inteiro
    Number.isSafeInteger()	Retorna true se o argumento for um inteiro seguro
    Number.parseFloat()	    Converte uma string em um número
    Number.parseInt()	    Converte uma string em um número inteiro

*/