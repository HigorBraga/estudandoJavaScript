/*
    Ordenação Numérica
    Por padrão, a sort()função classifica os valores como strings .

    Isso funciona bem para strings ("Apple" vem antes de "Banana").

    No entanto, se os números forem classificados como strings, "25" é maior que "100", porque "2" é maior que "1".

    Por causa disso, o sort()método produzirá resultados incorretos ao classificar números.

    Você pode corrigir isso fornecendo uma função de comparação :

*/

/*
const points = [40, 100, 1, 5, 25, 10, 500];
points.sort(function(a, b){return a - b});
console.log(Math.max.apply(null, points));
console.log(Math.min.apply(null, points));
*/

// Use o mesmo truque para classificar um array decrescente:
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b - a});


function valorMaiorEMenor(lista) {
    var maior = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
        }
    }
    return maior;
}



const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 35, 95];

console.log(valorMaiorEMenor(lista));





/*
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 35];

for(let i = 0; i < lista.length; i++) {
    var maior = 0;
    if (lista[i] > maior) {
        maior = lista[i]
    }
}

console.log(maior);

*/