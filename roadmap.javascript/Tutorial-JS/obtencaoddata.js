/*

    Métodos de obtenção de data
    Method	Description
    getFullYear()	Get year as a four digit number (yyyy)
    getMonth()	Get month as a number (0-11)
    getDate()	Get day as a number (1-31)
    getDay()	Get weekday as a number (0-6)
    getHours()	Get hour (0-23)
    getMinutes()	Get minute (0-59)
    getSeconds()	Get second (0-59)
    getMilliseconds()	Get millisecond (0-999)
    getTime()	Get time (milliseconds since January 1, 1970)
*/


const data = new Date().getFullYear();
console.log(data);

const mes = new Date().getMonth();
console.log(mes);

/*
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date();
    let month = months[d.getMonth()];
*/

const dia = new Date().getDate();
console.log(dia);

console.log(`Hoje é dia ${dia} do mês ${mes} de ${data}`);

const horas = new Date().getHours();
console.log(horas);

const minutos = new Date().getMinutes();
console.log(minutos);

const segundos = new Date().getSeconds();
console.log(segundos);

const milissegundos = new Date().getMilliseconds();
console.log(milissegundos);

console.log(`Hoje é dia ${dia} do mês ${mes} de ${data} em ${horas}:${minutos}:${segundos}.${milissegundos}`);

const diasemana = new Date().getDay();
console.log(diasemana);

/*
    Observação
    Em JavaScript, o primeiro dia da semana (dia 0) é domingo.
    Alguns países do mundo consideram o primeiro dia da semana como segunda-feira.
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date();
    let day = days[d.getDay()];
*/

const milissegundosgettime = new Date().getTime();
console.log(milissegundosgettime); // O getTime()método retorna o número de milissegundos desde 1º de janeiro de 1970: