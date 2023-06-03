/*

A breakinstrução "pula" de um loop.

A continueinstrução "pula" uma iteração no loop.

*/


for (let i = 0; i <= 10; i++) {
    console.log(i);
    if (i == 5) {
        break
    };
};


for (let cont = 10; cont >= 0; cont--) {
    if (cont === 7) {
        continue;
        
    };
    console.log(cont);
};


const carros = ["Volvo", "Gol", "Fiat", "Mercedes"];

let marca = "";
lista: {
    marca += carros[0];
    marca += carros[1];
    break lista;
    marca += carros[2];
    marca += carros[3];
};

console.log(marca);