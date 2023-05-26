const numeros = [45, 4, 9, 16, 25];
let txt = '';
numeros.forEach(meusValores);

function meusValores(value) {
    txt += value + "<br>";
}

console.log(txt);