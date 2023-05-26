/*
    Datas abreviadas do JavaScript.
    Datas abreviadas são escritas com uma sintaxe "MM/DD/AAAA" como esta:

    const d = new Date("03/25/2015");    


    AVISOS!
    Em alguns navegadores, meses ou dias sem zeros à esquerda podem produzir um erro:

    const d = new Date("2015-3-25");

    O comportamento de "AAAA/MM/DD" é indefinido.
    Alguns navegadores tentarão adivinhar o formato. Alguns retornarão NaN.

    const d = new Date("2015/03/25");
    O comportamento de "DD-MM-AAAA" também é indefinido.
    Alguns navegadores tentarão adivinhar o formato. Alguns retornarão NaN.

    const d = new Date("25-03-2015");
*/