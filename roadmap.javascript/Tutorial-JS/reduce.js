const valores = [77, 5, 9, 25, 32];
let soma = valores.reduce(minhaFuncao);

function minhaFuncao (total, value, index, array) {
    return total + value;
}

console.log(soma);


/*
    Outra maneira de resolver o mesmo problema
    
    const valores = [77, 5, 9, 25, 32];
    let soma = valores.reduce(minhaFuncao);

    function minhaFuncao (total, value) {
        return total + value;
    }

    console.log(soma);
*/