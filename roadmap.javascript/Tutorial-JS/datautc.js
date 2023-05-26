/*
    A data e a hora são separadas por um T maiúsculo.

    A hora UTC é definida com uma letra maiúscula Z.

    Se você quiser modificar a hora relativa ao UTC, remova o Z e adicione +HH:MM ou -HH:MM:


    const d = new Date("2015-03-25T12:00:00-06:30");

    UTC (Universal Time Coordinated) é o mesmo que GMT (Greenwich Mean Time).

    Omitir T ou Z em uma string de data e hora pode fornecer resultados diferentes em diferentes navegadores.
*/