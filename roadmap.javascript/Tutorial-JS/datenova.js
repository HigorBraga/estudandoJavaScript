// ISO 8601 é o padrão internacional para a representação de datas e horas.
// A sintaxe ISO 8601 (AAAA-MM-DD) também é o formato de data JavaScript preferido:

const d = new Date("2015-03-25");

console.log(d);


/*
    Datas ISO (Ano e Mês)
    As datas ISO podem ser escritas sem especificar o dia (AAAA-MM):

    const d = new Date("2015-03");

    Os fusos horários irão variar o resultado acima entre 28 de fevereiro e 01 de março.

    As datas ISO podem ser escritas sem mês e dia (AAAA):

    const d = new Date("2015");

    As datas ISO podem ser escritas com horas, minutos e segundos adicionados (AAAA-MM-DDTHH:MM:SSZ):

    const d = new Date("2015-03-25T12:00:00Z");
*/