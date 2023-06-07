/*

Módulos
Os módulos JavaScript permitem que você divida seu código em arquivos separados.

Isso facilita a manutenção de uma base de código.

Os módulos são importados de arquivos externos com a importinstrução.

Os módulos também dependem type="module"da tag <script>.

*/

/*

Exportar
Módulos com funções ou variáveis podem ser armazenados em qualquer arquivo externo.

Existem dois tipos de exportação: Exportações nomeadas e Exportações padrão .


Exportações nomeadas
Vamos criar um arquivo chamado person.js, e preenchê-lo com as coisas que queremos exportar.

Você pode criar exportações nomeadas de duas maneiras. Em linha individualmente, ou todos de uma vez na parte inferior.
*/

import {nome, sobrenome, idade} from "./pessoa.js";
//import Pessoa from "./pessoa.js";
console.log(nome, sobrenome, idade);
/*

Importar
Você pode importar módulos para um arquivo de duas maneiras, com base no fato de serem exportações nomeadas ou exportações padrão.

As exportações nomeadas são construídas usando chaves. As exportações padrão não são.


Observação
Os módulos funcionam apenas com o protocolo HTTP(s).

Uma página da web aberta por meio do protocolo file:// não pode usar importação/exportação.
*/