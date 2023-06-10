/*

Todos os objetos JavaScript herdam propriedades e métodos de um protótipo.




Herança de protótipo
Todos os objetos JavaScript herdam propriedades e métodos de um protótipo:

Dateobjetos herdam deDate.prototype
Arrayobjetos herdam deArray.prototype
Personobjetos herdam dePerson.prototype
O Object.prototypeestá no topo da cadeia de herança do protótipo:

Dateobjetos, Arrayobjetos e Personobjetos herdam de Object.prototype.




Adicionando propriedades e métodos a objetos
Às vezes, você deseja adicionar novas propriedades (ou métodos) a todos os objetos existentes de um determinado tipo.

Às vezes, você deseja adicionar novas propriedades (ou métodos) a um construtor de objeto.

A propriedade JavaScript prototypetambém permite adicionar novos métodos aos construtores de objetos:

Apenas modifique seus próprios protótipos. Nunca modifique os protótipos de objetos JavaScript padrão.
*/