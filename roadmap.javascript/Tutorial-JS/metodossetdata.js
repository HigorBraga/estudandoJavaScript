/*

    Definir métodos de data
    Os métodos Set Date são usados ​​para definir uma parte de uma data:

    Method	Description
    setDate()	Set the day as a number (1-31)
    setFullYear()	Set the year (optionally month and day)
    setHours()	Set the hour (0-23)
    setMilliseconds()	Set the milliseconds (0-999)
    setMinutes()	Set the minutes (0-59)
    setMonth()	Set the month (0-11)
    setSeconds()	Set the seconds (0-59)
    setTime()	Set the time (milliseconds since January 1, 1970)


    O setFullYear()método define o ano de um objeto de data. Neste exemplo para 2020:
*/

const ano = new Date().setFullYear(2023, 4, 9);
console.log(ano);

const mes = new Date().setMonth(11);
console.log(mes);

const dia = new Date().setDate(9);
console.log(dia);

const hora = new Date().setHours(23);
console.log(hora);

const minuto = new Date().setMinutes(59);
console.log(minuto);

const segundo = new Date().setSeconds(59);
console.log(segundo);

const milisegundo = new Date().setMilliseconds(999);
console.log(milisegundo);

