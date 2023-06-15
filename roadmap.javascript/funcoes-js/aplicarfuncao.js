/*

Reutilização de método
Com o apply()método, você pode escrever um método que pode ser usado em diferentes objetos.



O Método JavaScript apply()
O apply()método é semelhante ao call()método (capítulo anterior).

Neste exemplo, o método fullName de person é aplicado em person1 :

Exemplo
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName: "Mary",
  lastName: "Doe"
}

// This will return "Mary Doe":
person.fullName.apply(person1);


A diferença entre call() e apply()
A diferença é:

O call()método aceita argumentos separadamente .

O apply()método recebe argumentos como uma matriz .

O método apply() é muito útil se você quiser usar um array em vez de uma lista de argumentos.


O método apply() com argumentos
O apply()método aceita argumentos em uma matriz:

Exemplo
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.apply(person1, ["Oslo", "Norway"]);


Simule um método máximo em matrizes
Você pode encontrar o maior número (em uma lista de números) usando o Math.max()método:

Exemplo
Math.max(1,2,3);  // Will return 3

Como as matrizes JavaScript não têm um método max(), você pode aplicar o Math.max()método.

Exemplo
Math.max.apply(null, [1,2,3]); // Will also return 3

O primeiro argumento (nulo) não importa. Não é usado neste exemplo.

Estes exemplos darão o mesmo resultado:

Exemplo
Math.max.apply(Math, [1,2,3]);


JavaScript em modo estrito
No modo restrito do JavaScript, se o primeiro argumento do apply()método não for um objeto, ele se tornará o proprietário (objeto) da função invocada. No modo "non-strict", torna-se o objeto global.
*/