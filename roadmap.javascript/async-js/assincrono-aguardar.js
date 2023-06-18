/*

"async e await tornam as promessas mais fáceis de escrever"

async faz uma função retornar uma promessa

await faz uma função esperar por uma Promise

Sintaxe assíncrona
A palavra-chave asyncantes de uma função faz com que a função retorne uma promessa.


Exemplo
async function myFunction() {
  return "Hello";
}
É o mesmo que:

function myFunction() {
  return Promise.resolve("Hello");
}
Veja como usar a Promessa:

myFunction().then(
  function(value) {  code if successful  },
  function(error) {  code if some error  }
);

*/

async function myFunction() {
    return "Olá, Mundo!!!";
}

myFunction().then(
    function(value) {
        console.log(value);
    }
)

/*

Aguardar Sintaxe
A awaitpalavra-chave só pode ser usada dentro de uma asyncfunção.

A awaitpalavra-chave faz a função pausar a execução e aguardar uma promessa resolvida antes de continuar:

let value = await promise;

*/

async function mostrarResultado() {
    let minhaPromessa = new Promise(function(resolve, reject) {
        console.log("Eu amo Estudar");
    });
}

mostrarResultado();


/*

Os dois argumentos (resolver e rejeitar) são predefinidos pelo JavaScript.

Não vamos criá-los, mas chamar um deles quando a função executora estiver pronta.

Muitas vezes, não precisaremos de uma função de rejeição.

Exemplo sem rejeitar
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();


*/


async function meuResultado() {
    let minhasPromessas = new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Eu amo musicas");
        }, 3000);
    });
}

meuResultado();


/*

Esperando por um arquivo
async function getFile() {
  let myPromise = new Promise(function(resolve) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

getFile();

*/