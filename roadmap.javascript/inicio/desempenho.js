/*

Reduzir Atividade em Loops
Loops são freqüentemente usados em programação.

Cada instrução em um loop, incluindo a instrução for, é executada para cada iteração do loop.

Instruções ou atribuições que podem ser colocadas fora do loop farão com que o loop seja executado mais rapidamente.

Errado
for (let i = 0; i < arr.length; i++)

Correto
let l = arr.length;
for (let i = 0; i < l; i++)


O código inválido acessa a propriedade length de uma matriz toda vez que o loop é iterado.

O melhor código acessa a propriedade length fora do loop e faz com que o loop seja executado mais rapidamente.
*/



/*

Reduza o acesso DOM
O acesso ao HTML DOM é muito lento, em comparação com outras instruções JavaScript.

Se você espera acessar um elemento DOM várias vezes, acesse-o uma vez e use-o como uma variável local:


Reduzir o tamanho do DOM
Mantenha o número de elementos no HTML DOM pequeno.

Isso sempre melhorará o carregamento da página e acelerará a renderização (exibição da página), especialmente em dispositivos menores.

Cada tentativa de pesquisar o DOM (como getElementsByTagName) se beneficiará de um DOM menor.
*/



/*

Evite variáveis desnecessárias
Não crie novas variáveis se não planeja salvar valores.

Muitas vezes você pode substituir o código como este:

let fullName = firstName + " " + lastName;
document.getElementById("demo").innerHTML = fullName;


Com isso:

document.getElementById("demo").innerHTML = firstName + " " + lastName;

*/



/*

Atrasar carregamento do JavaScript
Colocar seus scripts na parte inferior do corpo da página permite que o navegador carregue a página primeiro.

Durante o download de um script, o navegador não iniciará nenhum outro download. Além disso, todas as atividades de análise e renderização podem ser bloqueadas.

A especificação HTTP define que os navegadores não devem baixar mais de dois componentes em paralelo.

Uma alternativa é usar defer="true"na tag script. O atributo defer especifica que o script deve ser executado após a conclusão da análise da página, mas funciona apenas para scripts externos.

Se possível, você pode adicionar seu script à página por código, após o carregamento da página

*/


/*

Evite usar com
Evite usar a withpalavra-chave. Tem um efeito negativo na velocidade. Ele também sobrecarrega os escopos do JavaScript.

A withpalavra-chave não é permitida no modo estrito.

*/