/*

Sempre use as mesmas convenções de codificação para todos os seus projetos JavaScript.




Convenções de Codificação JavaScript
As convenções de codificação são diretrizes de estilo para programação . Eles normalmente cobrem:

Regras de nomenclatura e declaração de variáveis e funções.
Regras para o uso de espaço em branco, recuo e comentários.
Práticas e princípios de programação.
As convenções de codificação garantem a qualidade :

Melhorar a legibilidade do código
Facilite a manutenção do código
As convenções de codificação podem ser regras documentadas para as equipes seguirem ou apenas ser sua prática de codificação individual.
*/

/*

Recuo de código
Sempre use 2 espaços para indentação de blocos de código:


Não use guias (tabuladores) para indentação. Diferentes editores interpretam as guias de maneira diferente.

*/



/*

Regras de declaração
Regras gerais para declarações simples:

Sempre termine uma declaração simples com um ponto e vírgula.




Regras gerais para declarações complexas (compostas):

Coloque o colchete de abertura no final da primeira linha.
Use um espaço antes do colchete de abertura.
Coloque o colchete de fechamento em uma nova linha, sem espaços iniciais.
Não termine uma instrução complexa com um ponto e vírgula.
*/



/*

Regras de objeto
Regras gerais para definições de objetos:

Coloque o colchete de abertura na mesma linha do nome do objeto.
Use dois pontos mais um espaço entre cada propriedade e seu valor.
Use aspas em torno de valores de string, não em torno de valores numéricos.
Não adicione uma vírgula após o último par propriedade-valor.
Coloque o colchete de fechamento em uma nova linha, sem espaços iniciais.
Sempre termine uma definição de objeto com um ponto e vírgula.

*/


/*

Comprimento da linha < 80
Para facilitar a leitura, evite linhas com mais de 80 caracteres.

Se uma instrução JavaScript não couber em uma linha, o melhor lugar para quebrá-la é após um operador ou uma vírgula.

*/


/*

Convenções de nomenclatura
Sempre use a mesma convenção de nomenclatura para todo o seu código. Por exemplo:

Nomes de variáveis e funções escritos como camelCase
Variáveis globais escritas em MAIÚSCULAS (não temos, mas é bem comum)
Constantes (como PI) escritas em MAIÚSCULAS
Você deve usar hyp-hens , camelCase ou under_scores em nomes de variáveis?

Esta é uma questão que os programadores costumam discutir. A resposta depende de para quem você pergunta:

Hífens em HTML e CSS:

Os atributos HTML5 podem começar com data- (data-quantity, data-price).

CSS usa hífens em nomes de propriedade (tamanho da fonte).

Hífens podem ser confundidos com tentativas de subtração. Hífens não são permitidos em nomes JavaScript.

*/


/*

Sublinhados:

Muitos programadores preferem usar sublinhados (date_of_birth), especialmente em bancos de dados SQL.

Sublinhados são freqüentemente usados na documentação do PHP.

Pascal Caso:

PascalCase é frequentemente preferido por programadores C.

CamelCase:

camelCase é usado pelo próprio JavaScript, por jQuery e outras bibliotecas JavaScript.

Não inicie nomes com um sinal $. Isso o colocará em conflito com muitos nomes de bibliotecas JavaScript.

*/



/*

Use Nomes de Arquivos em Minúsculas
A maioria dos servidores web (Apache, Unix) diferencia maiúsculas de minúsculas nos nomes dos arquivos:

london.jpg não pode ser acessado como London.jpg.

Outros servidores web (Microsoft, IIS) não diferenciam maiúsculas de minúsculas:

london.jpg pode ser acessado como London.jpg ou london.jpg.

Se você usar uma mistura de maiúsculas e minúsculas, precisará ser extremamente consistente.

Se você passar de um servidor que não diferencia maiúsculas de minúsculas para um servidor que diferencia maiúsculas de minúsculas, mesmo pequenos erros podem interromper seu site.

Para evitar esses problemas, sempre use nomes de arquivos em letras minúsculas (se possível).

*/



/*

Desempenho
Convenções de codificação não são usadas por computadores. A maioria das regras tem pouco impacto na execução dos programas.

Recuo e espaços extras não são significativos em scripts pequenos.

Para código em desenvolvimento, a legibilidade deve ser preferida. Roteiros de produção maiores devem ser minimizados.

*/