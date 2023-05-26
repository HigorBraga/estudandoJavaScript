const valores = [5, 2, 4, 77, 9];
const novosValores = valores.filter(minhaFuncao);

function minhaFuncao (value, index, array) {
    return value > 18;
}

console.log(novosValores);