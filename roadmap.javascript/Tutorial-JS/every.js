// Este exemplo verifica se todos os valores da matriz são maiores que 18:

const valores = [5, 2, 4, 77, 9];
const novosValores = valores.every(minhaFuncao);

function minhaFuncao (value, index, array) {
    return value > 18;
}

console.log(novosValores);

/*

    const valores = [5, 2, 4, 77, 9];
    const novosValores = valores.every(minhaFuncao);

    function minhaFuncao (value) {
        return value > 18;
}

*/