const valores = [45, 9, 16, 95, 77];
const valores2 = valores.map(meusValores);

function meusValores(value, index, array) {
    return value * 2;
}

console.log(valores2);