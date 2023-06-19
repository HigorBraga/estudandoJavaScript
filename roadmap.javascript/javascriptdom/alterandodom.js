/*

O HTML DOM permite que o JavaScript altere o conteúdo dos elementos HTML.

Alterando o Conteúdo HTML
A maneira mais fácil de modificar o conteúdo de um elemento HTML é usando a innerHTMLpropriedade.

Para alterar o conteúdo de um elemento HTML, use esta sintaxe:

document.getElementById(id).innerHTML = new HTML
Este exemplo altera o conteúdo de um <p>elemento:

Exemplo
<html>
<body>

<p id="p1">Hello World!</p>

<script>
document.getElementById("p1").innerHTML = "New text!";
</script>

</body>
</html>
Exemplo explicado:

O documento HTML acima contém um <p>elemento comid="p1"
Usamos o HTML DOM para obter o elemento comid="p1"
Um JavaScript altera o conteúdo ( innerHTML) desse elemento para "Novo texto!"

*/

/*

Alterando o valor de um atributo
Para alterar o valor de um atributo HTML, use esta sintaxe:

document.getElementById(id).attribute = new value
Este exemplo altera o valor do atributo src de um <img>elemento:

Exemplo
<!DOCTYPE html>
<html>
<body>

<img id="myImage" src="smiley.gif">

<script>
document.getElementById("myImage").src = "landscape.jpg";
</script>

</body>
</html>
Exemplo explicado:

O documento HTML acima contém um <img>elemento comid="myImage"
Usamos o HTML DOM para obter o elemento comid="myImage"
Um JavaScript altera o srcatributo desse elemento de "smiley.gif" para "landscape.jpg".

*/


/*

Conteúdo HTML dinâmico
JavaScript pode criar conteúdo HTML dinâmico:

Data: segunda-feira, 19 de junho de 2023 01:40:38 GMT-0300 (horário padrão de Brasília)

Exemplo
<!DOCTYPE html>
<html>
<body>

<script>
document.getElementById("demo").innerHTML = "Date : " + Date(); </script>

</body>
</html>

*/

/*

document.write()
Em JavaScript, document.write()pode ser usado para gravar diretamente no fluxo de saída HTML:

Exemplo
<!DOCTYPE html>
<html>
<body>

<p>Bla bla bla</p>

<script>
document.write(Date());
</script>

<p>Bla bla bla</p>

</body>
</html>
Nunca use document.write()depois que o documento estiver carregado. Ele substituirá o documento.

*/