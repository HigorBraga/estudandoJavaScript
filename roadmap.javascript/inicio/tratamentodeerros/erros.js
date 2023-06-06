/*

Jogue e tente...Pegue...Finalmente
A tryinstrução define um bloco de código para executar (para tentar).

A catchinstrução define um bloco de código para lidar com qualquer erro.

A finallyinstrução define um bloco de código a ser executado independentemente do resultado.

A throwinstrução define um erro personalizado.

*/

let resultado = window.document.getElementById('mensagem');


try {
    alertt("Welcome guest!");
}
catch(erro) {
    resultado.innerHTML = erro.message;
};


function entrar() {
    let usuario = window.document.getElementById('usuario').value;
    let resul = window.document.getElementById('resul');

    try {
        if (usuario.trim() == "") {
            throw "Negado";
        } else if (usuario == "Higor Braga") {
            throw "Concedido!!"
        } else if (usuario == "Vitor") {
            throw "Concedido!!!"
        } else {
            throw "Negado!";
        }
    }
    catch(error) {
        resul.innerHTML = "O acesso foi: " + error;
    }
    finally {
        resul.innerHTML += "<br>O acesso foi finalizado.</br>";
    }
};


/*

Valores de nome de erro
Seis valores diferentes podem ser retornados pela propriedade error name:

Nome do erro	            Descrição
EvalError	                Ocorreu um erro na função eval()
RangeError	                Ocorreu um número "fora do intervalo"
ReferenceError	            Ocorreu uma referência ilegal
Erro de sintaxe	            Ocorreu um erro de sintaxe
TypeError	                Ocorreu um erro de tipo
URIError	                Ocorreu um erro em encodeURI()


erro de avaliação
An EvalErrorindica um erro na função eval().

As versões mais recentes do JavaScript não lançam EvalError. Em vez disso, use SyntaxError.


Erro de intervalo
A RangeErroré lançado se você usar um número que está fora do intervalo de valores legais.

Por exemplo: Você não pode definir o número de dígitos significativos de um número como 500.


Erro de referência
A ReferenceErroré lançado se você usar (referenciar) uma variável que não foi declarada.


Erro de sintaxe
A SyntaxErroré lançado se você tentar avaliar o código com um erro de sintaxe.


Erro de tipo
A TypeErroré lançado se você usar um valor que está fora do intervalo de tipos esperados.


Erro URI (Uniform Resource Identifier)
A URIErroré lançado se você usar caracteres ilegais em uma função URI
*/