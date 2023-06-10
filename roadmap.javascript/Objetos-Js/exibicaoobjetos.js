/*

Como exibir objetos JavaScript?
A exibição de um objeto JavaScript resultará em [object Object] .




Algumas soluções comuns para exibir objetos JavaScript são:

Exibindo as propriedades do objeto por nome
Exibindo as propriedades do objeto em um loop
Exibindo o objeto usando Object.values()
Exibindo o objeto usando JSON.stringify()



Exibindo Propriedades do Objeto
As propriedades de um objeto podem ser exibidas como uma string.

Exibindo o objeto em um loop
As propriedades de um objeto podem ser coletadas em um loop.

Você deve usar person[x] no loop.

person.x não funcionará (porque x é uma variável).



Usando Object.values()
Qualquer objeto JavaScript pode ser convertido em um array usando Object.values().

Object.values()é compatível com todos os principais navegadores desde 2016.



Usando JSON.stringify()
Qualquer objeto JavaScript pode ser stringificado (convertido em uma string) com a função JavaScript JSON.stringify().

O resultado será uma string seguindo a notação JSON:

{"name":"John","age":50,"city":"New York"}
JSON.stringify()está incluído no JavaScript e é compatível com todos os principais navegadores.



Stringify Datas
JSON.stringifyconverte datas em strings.
*/