/*

As propriedades são a parte mais importante de qualquer objeto JavaScript.


Propriedades do JavaScript
As propriedades são os valores associados a um objeto JavaScript.

Um objeto JavaScript é uma coleção de propriedades não ordenadas.

As propriedades geralmente podem ser alteradas, adicionadas e excluídas, mas algumas são somente leitura.


Adicionando Novas Propriedades
Você pode adicionar novas propriedades a um objeto existente simplesmente atribuindo-lhe um valor.

Suponha que o objeto pessoa já exista - você pode então dar a ele novas propriedades:

  person.nationality = "English";


Excluindo propriedades
A deletepalavra-chave exclui uma propriedade de um objeto:


A deletepalavra-chave exclui o valor da propriedade e a própria propriedade.

Após a exclusão, a propriedade não pode ser usada antes de ser adicionada novamente.

O deleteoperador foi projetado para ser usado nas propriedades do objeto. Não tem efeito sobre variáveis ou funções.

O deleteoperador não deve ser usado em propriedades predefinidas do objeto JavaScript. Ele pode travar seu aplicativo.


Arrays e objetos aninhados
Valores em objetos podem ser arrays e valores em arrays podem ser objetos.


Atributos de propriedade
Todas as propriedades têm um nome. Além disso, eles também têm um valor.

O valor é um dos atributos da propriedade.

Outros atributos são: enumeráveis, configuráveis e graváveis.

Esses atributos definem como a propriedade pode ser acessada (é legível?, é gravável?)

Em JavaScript, todos os atributos podem ser lidos, mas somente o atributo value pode ser alterado (e somente se a propriedade for gravável).

(ECMAScript 5 possui métodos para obter e definir todos os atributos de propriedade).
*/