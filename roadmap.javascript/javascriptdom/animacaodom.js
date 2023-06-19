/*

Aprenda a criar animações HTML usando JavaScript.

Criar um contêiner de animação
Todas as animações devem ser relativas a um elemento de contêiner.

<div id ="container">
  <div id ="animate">My animation will go here</div>
</div>

Estilize os elementos
O elemento container deve ser criado com style = " position: relative".

O elemento de animação deve ser criado com style = " position: absolute".

#container {
  width: 400px;
  height: 400px;
  position: relative;
  background: yellow;
}
#animate {
  width: 50px;
  height: 50px;
  position: absolute;
  background: red;
}



Código de Animação
As animações JavaScript são feitas programando mudanças graduais no estilo de um elemento.

As alterações são chamadas por um temporizador. Quando o intervalo do timer é pequeno, a animação parece contínua.

O código básico é:

Exemplo
id = setInterval(frame, 5);

function frame() {
  if ( test for finished ) {
    clearInterval(id);
  } else {
    code to change the element style
  }
}


Crie a animação completa usando JavaScript
Exemplo
function myMove() {
  let id = null;
  const elem = document.getElementById("animate");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
*/