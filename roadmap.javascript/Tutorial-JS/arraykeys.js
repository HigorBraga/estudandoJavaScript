// O Array.keys()método retorna um objeto Array Iterator com as chaves de um array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
let text = '';
for (let x of keys) {
  text += x + " ";
}

console.log(text);