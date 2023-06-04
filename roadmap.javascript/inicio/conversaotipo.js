/*

Convertendo Strings em Números
Convertendo Números em Strings
Convertendo Datas em Números
Convertendo Números em Datas
Convertendo Booleanos em Números
Convertendo números para booleanos

*/

/*

Convertendo Strings em Números
O método global Number()converte uma variável (ou um valor) em um número.

Uma string numérica (como "3.14") é convertida em um número (como 3.14).

Uma string vazia (como "") é convertida em 0.

Uma string não numérica (como "John") é convertida em NaN(não é um número).

*/

/*

Method	        Description
Number()	    Returns a number, converted from its argument
parseFloat()	Parses a string and returns a floating point number
parseInt()	    Parses a string and returns an integer

O Unário + Operador
O operador unário + pode ser usado para converter uma variável em um número.

*/

/*

Convertendo Números em Strings
O método global String()pode converter números em strings.

Pode ser usado em qualquer tipo de número, literal, variável ou expressão.


Mais métodos
No capítulo Métodos numéricos , você encontrará mais métodos que podem ser usados ​​para converter números em strings:

Method	            Description
toExponential()	    Returns a string, with a number rounded and written using exponential notation.
toFixed()	        Returns a string, with a number rounded and written with a specified number of decimals.
toPrecision()	    Returns a string, with a number written with a specified length
*/

/*

Convertendo Datas em Números
O método global Number()pode ser usado para converter datas em números.


Convertendo Datas em Strings
O método global String()pode converter datas em strings.

Method	            Description
getDate()	        Get the day as a number (1-31)
getDay()	        Get the weekday a number (0-6)
getFullYear()	    Get the four digit year (yyyy)
getHours()	        Get the hour (0-23)
getMilliseconds()	Get the milliseconds (0-999)
getMinutes()	    Get the minutes (0-59)
getMonth()	        Get the month (0-11)
getSeconds()	    Get the seconds (0-59)
getTime()	        Get the time (milliseconds since January 1, 1970)


Conversão automática de tipo
Quando o JavaScript tenta operar em um tipo de dados "errado", ele tenta converter o valor para um tipo "certo".

O resultado nem sempre é o que você espera.


Conversão Automática de Strings
O JavaScript chama automaticamente a função da variável toString()quando você tenta "exibir" um objeto ou uma variável.
*/