/*

Um mapa contém pares chave-valor onde as chaves podem ser qualquer tipo de dados.

Um mapa lembra a ordem de inserção original das chaves.

Um mapa tem uma propriedade que representa o tamanho do mapa.



Métodos de mapa

Método	            Descrição
novo Mapa()	        Cria um novo objeto Map
definir()	        Define o valor de uma chave em um mapa
pegar()	            Obtém o valor de uma chave em um mapa
claro()	            Remove todos os elementos de um mapa
excluir()	        Remove um elemento Map especificado por uma chave
tem()	            Retorna verdadeiro se uma chave existir em um mapa
para cada()	        Chama um retorno de chamada para cada par chave/valor em um Mapa
entradas()	        Retorna um objeto iterador com os pares [chave, valor] em um Mapa
chaves()	        Retorna um objeto iterador com as chaves em um Mapa
valores()	        Retorna um objeto iterador dos valores em um Mapa


Propriedade	        Descrição
tamanho	            Retorna o número de elementos do mapa



Como criar um mapa
Você pode criar um Mapa JavaScript por:

Passando um Array paranew Map()
Crie um mapa e useMap.set()


Map.get()
O get()método obtém o valor de uma chave em um Map.

Tamanho do mapa
A sizepropriedade retorna o número de elementos em um mapa.

Mapa.delete()
O delete()método remove um elemento Map.

Map.clear()
O clear()método remove todos os elementos de um Map.

Map.has()
O has()método retorna verdadeiro se uma chave existir em um Mapa.



Objetos JavaScript vs Mapas
Diferenças entre Objetos JavaScript e Mapas

Objeto	                                    Mapa
Não iterável diretamente	                Diretamente iterável
Não tem uma propriedade de tamanho	        Tenha uma propriedade de tamanho
As chaves devem ser Strings (ou Símbolos)	As chaves podem ser qualquer tipo de dados
As chaves não estão bem ordenadas	        As chaves são ordenadas por inserção
Ter chaves padrão	                        Não tem chaves padrão

Map.forEach()
O forEach()método invoca um callback para cada par chave/valor em um Map.

Map.entries()
O entries()método retorna um objeto iterador com [key,values] em um Map.

Objetos como Chaves
Ser capaz de usar objetos como chaves é um importante recurso do Mapa.
*/