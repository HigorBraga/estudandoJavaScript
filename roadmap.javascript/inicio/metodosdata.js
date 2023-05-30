// Métodos de obtenção de data

/*

    Method	            Description
    getFullYear()	    Get year as a four digit number (yyyy)
    getMonth()	        Get month as a number (0-11)
    getDate()	        Get day as a number (1-31)
    getDay()	        Get weekday as a number (0-6)
    getHours()	        Get hour (0-23)
    getMinutes()	    Get minute (0-59)
    getSeconds()	    Get second (0-59)
    getMilliseconds()	Get millisecond (0-999)
    getTime()	        Get time (milliseconds since January 1, 1970)

*/

/*

Os métodos get acima retornam a hora local .

A hora universal (UTC) está documentada na parte inferior desta página.

Os métodos get retornam informações de objetos de data existentes.

Em um objeto de data, a hora é estática. O "relógio" não está "funcionando".

A hora em um objeto de data NÃO é a mesma que a hora atual.
*/

const mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const data = new Date('2023-05-30');
let mesData = mes[data.getMonth()];
console.log(mesData);

const d = new Date();
console.log(mes[d.getMonth()]);

/*

Observação
Em JavaScript, o primeiro dia da semana (dia 0) é domingo.

Alguns países do mundo consideram o primeiro dia da semana como segunda-feira.


O método getTimezoneOffset()
O getTimezoneOffset()método retorna a diferença (em minutos) entre a hora local e a hora UTC:
*/