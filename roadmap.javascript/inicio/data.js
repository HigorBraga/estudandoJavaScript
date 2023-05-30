// Os objetos de data são estáticos. O "relógio" não está "funcionando".
// O relógio do computador está funcionando, os objetos de data não.

/*

    new Date()
    new Date(date string)

    new Date(year,month)
    new Date(year,month,day)
    new Date(year,month,day,hours)
    new Date(year,month,day,hours,minutes)
    new Date(year,month,day,hours,minutes,seconds)
    new Date(year,month,day,hours,minutes,seconds,ms)

    new Date(milliseconds)

*/

let dataAtual = new Date();
console.log(dataAtual.toDateString());


/*

Entrada de data em JavaScript

Data ISO = '2023-03-30' (padrão internacional)
Encontro curto = '30/03/2023'
data loga = '30 de março de 2023'



O formato ISO segue um padrão estrito em JavaScript.
Os outros formatos não são tão bem definidos e podem ser específicos do navegador.


A data e a hora são separadas por um T maiúsculo.
A hora UTC é definida com uma letra maiúscula Z.
Se você quiser modificar a hora relativa ao UTC, remova o Z e adicione +HH:MM ou -HH:MM:

Omitir T ou Z em uma string de data e hora pode fornecer resultados diferentes em diferentes navegadores.
*/