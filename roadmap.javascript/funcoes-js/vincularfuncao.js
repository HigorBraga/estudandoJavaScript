/*

Empréstimo de função
Com o bind()método, um objeto pode tomar emprestado um método de outro objeto.

O exemplo abaixo cria 2 objetos (pessoa e membro).

O objeto membro toma emprestado o método fullname do objeto pessoa:

Exemplo
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);



preservando isso
Às vezes, o bind()método deve ser usado para evitar a perda deste arquivo .

No exemplo a seguir, o objeto pessoa tem um método de exibição. No método display, this refere-se ao objeto person:

Exemplo
const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

person.display();


Quando uma função é usada como retorno de chamada, ela é perdida.

Este exemplo tentará exibir o nome da pessoa após 3 segundos, mas exibirá indefinido :

Exemplo
const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

setTimeout(person.display, 3000);
O bind()método resolve esse problema.

No exemplo a seguir, o bind()método é usado para associar person.display a person.

Este exemplo exibirá o nome da pessoa após 3 segundos:

Exemplo
const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

let display = person.display.bind(person);
setTimeout(display, 3000);
*/