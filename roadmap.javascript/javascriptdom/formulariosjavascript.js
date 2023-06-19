/*

Validação de Formulário JavaScript
A validação do formulário HTML pode ser feita por JavaScript.

Se um campo do formulário (fname) estiver vazio, esta função alerta uma mensagem, e retorna false, para evitar que o formulário seja submetido:

Exemplo de JavaScript
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
A função pode ser chamada quando o formulário é enviado:

Exemplo de Formulário HTML
<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
Name: <input type="text" name="fname">
<input type="submit" value="Submit">
</form>

*/

/*

JavaScript pode validar entrada numérica
O JavaScript é frequentemente usado para validar entradas numéricas.

*/

/*

Validação automática de formulário HTML
A validação do formulário HTML pode ser realizada automaticamente pelo navegador:

Se um campo de formulário (fname) estiver vazio, o requiredatributo impede que este formulário seja enviado:

Exemplo de Formulário HTML
<form action="/action_page.php" method="post">
  <input type="text" name="fname" required>
  <input type="submit" value="Submit">
</form>
A validação automática de formulário HTML não funciona no Internet Explorer 9 ou anterior.

*/

/*

Data de validade
A validação de dados é o processo de garantir que a entrada do usuário seja limpa, correta e útil.

As tarefas típicas de validação são:

o usuário preencheu todos os campos obrigatórios?
o usuário inseriu uma data válida?
o usuário digitou texto em um campo numérico?
Na maioria das vezes, o objetivo da validação de dados é garantir a entrada correta do usuário.

A validação pode ser definida por muitos métodos diferentes e implementada de muitas maneiras diferentes.

A validação do lado do servidor é executada por um servidor da web, depois que a entrada é enviada ao servidor.

A validação do lado do cliente é executada por um navegador da web, antes que a entrada seja enviada para um servidor da web.

*/

/*

Validação de restrição de HTML
O HTML5 introduziu um novo conceito de validação HTML chamado validação de restrição .

A validação de restrição HTML é baseada em:

Atributos de entrada HTML de validação de restrição
Pseudo-seletores CSS de validação de restrição
Propriedades e métodos do DOM de validação de restrição.

*/

/*

Atributos de entrada HTML de validação de restrição

Attribute	        Description
disabled	        Specifies that the input element should be disabled
min	                Specifies the minimum value of an input element
max	                Specifies the maximum value of an input element
pattern	            Specifies the value pattern of an input element
required	        Specifies that the input field requires an element
type 	            Specifies the type of an input element.


Pseudo-seletores CSS de validação de restrição

Selector	        Description
:disabled	        Selects input elements with the "disabled" attribute specified
:invalid	        Selects input elements with invalid values
:optional	        Selects input elements with no "required" attribute specified
:required	        Selects input elements with the "required" attribute specified
:valid	            Selects input elements with valid values
*/