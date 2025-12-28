/*
Construa um jogo tic-tac-toe, conhecido em português como jogo da velha, utilizando HTML, CSS e Javascript. Você pode desenvolver com liberdade, da forma que preferir, mas o jogo precisa atender aos seguintes requisitos:

- Deve ser possível incluir os nomes dos dois jogadores;
- O nome do jogador da vez deve ser mostrado na tela e alterado a medida que os turnos vão se alternando;
- Um tabuleiro deve ser mostrado na tela e ser atualizado quando o jogador clicar na região que ele quer marcar;
- Quando um jogador clicar no tabuleiro deve ser marcado um “X” ou “O” de acordo com o jogador da vez e não deve ser possível clicar naquela região novamente;
- Quando um jogador ganhar seu nome deve ser mostrado na tela e as regiões da vitória devem ser destacadas de alguma forma;
- Em caso de empate, uma mensagem de empate deve ser mostrada na tela;
- Deve ser possível reiniciar o jogo para jogar novamente.
 */

let jogador1 = document.getElementById("jogador-1")
let jogador2 = document.getElementById("jogador-2")
console.log(jogador1)
console.log(jogador2)

function turno(){

 const main = document.querySelector("main")
 let filhosMain = main.childNodes;
 let contadorDeClicks = 0
 filhosMain.forEach(function(element){
  element.addEventListener("click",function click(event){
    contadorDeClicks++
    console.log(event.currentTarget)

    if(contadorDeClicks%2=== 1){
      document.querySelector('input[id="jogador-1"]').style.border ="1px solid blue"
      event.currentTarget.setAttribute("name",jogador1.value)
      event.currentTarget.style.display = "flex"
      event.currentTarget.style.justifyContent = "center"
      event.currentTarget.style.alignItems = "center"
      event.currentTarget.innerHTML = "<span>X</span>";
      event.currentTarget.querySelector("span").style.fontSize = "40px"
      event.currentTarget.querySelector("span").style.fontFamily = "'Irish Grover', cursive";
      event.currentTarget.querySelector("span").style.color = "blue";
      document.querySelector('input[id="jogador-2"]').style.removeProperty("border");
      event.currentTarget.removeEventListener("click",click)
    }else{
      document.querySelector('input[id="jogador-2"]').style.border ="1px solid red"
      event.currentTarget.setAttribute("name", jogador2.value);
      event.currentTarget.style.display = "flex";
      event.currentTarget.style.justifyContent = "center";
      event.currentTarget.style.alignItems = "center";
      event.currentTarget.innerHTML = "<span>O</span>";
      event.currentTarget.querySelector("span").style.fontSize = "40px";
      event.currentTarget.querySelector("span").style.fontFamily = "'Irish Grover', cursive";
      event.currentTarget.querySelector("span").style.color = "red";
      document.querySelector('input[id="jogador-1"]').style.removeProperty("border");
      event.currentTarget.removeEventListener("click", click);
    }
    //jogador-1
      if(document.getElementById("bloco-1").getAttribute("name") === jogador1.value && document.getElementById("bloco-2").getAttribute("name") === jogador1.value && document.getElementById("bloco-3").getAttribute("name") === jogador1.value){
       document.getElementById("bloco-1").style.backgroundColor = "blue"
       document.getElementById("bloco-1").firstChild.style.color = "white";
       document.getElementById("bloco-2").style.backgroundColor = "blue";
       document.getElementById("bloco-2").firstChild.style.color = "white";
       document.getElementById("bloco-3").style.backgroundColor = "blue";
       document.getElementById("bloco-3").firstChild.style.color = "white";
       setTimeout(function(){ alert("O Vencedor foi "+jogador1.value)},1000)
       setTimeout(function(){window.location.reload()},1500)
       
      }
      else if(document.getElementById("bloco-4").getAttribute("name") === jogador1.value && document.getElementById("bloco-5").getAttribute("name") === jogador1.value && document.getElementById("bloco-6").getAttribute("name") === jogador1.value){
       document.getElementById("bloco-4").style.backgroundColor = "blue";
       document.getElementById("bloco-4").firstChild.style.color = "white";
       document.getElementById("bloco-5").style.backgroundColor = "blue"
       document.getElementById("bloco-5").firstChild.style.color = "white";
       document.getElementById("bloco-6").style.backgroundColor = "blue"
       document.getElementById("bloco-6").firstChild.style.color = "white";
       setTimeout(function(){ alert("O Vencedor foi "+jogador1.value)},1000)
       setTimeout(function(){window.location.reload()},1500)
      }
      else if(document.getElementById("bloco-7").getAttribute("name") === jogador1.value && document.getElementById("bloco-8").getAttribute("name") === jogador1.value && document.getElementById("bloco-9").getAttribute("name") === jogador1.value){
       document.getElementById("bloco-7").style.backgroundColor = "blue"
       document.getElementById("bloco-7").firstChild.style.color = "white";
       document.getElementById("bloco-8").style.backgroundColor = "blue"
       document.getElementById("bloco-8").firstChild.style.color = "white";
       document.getElementById("bloco-9").style.backgroundColor = "blue"
       document.getElementById("bloco-9").firstChild.style.color = "white";
       setTimeout(function(){ alert("O Vencedor foi "+jogador1.value)},1000)
       setTimeout(function(){window.location.reload()},1500)
      }
      else if(document.getElementById("bloco-1").getAttribute("name") === jogador1.value && document.getElementById("bloco-5").getAttribute("name") === jogador1.value && document.getElementById("bloco-9").getAttribute("name") === jogador1.value){
       document.getElementById("bloco-1").style.backgroundColor = "blue";
       document.getElementById("bloco-1").firstChild.style.color = "white";
       document.getElementById("bloco-5").style.backgroundColor = "blue"
       document.getElementById("bloco-5").firstChild.style.color = "white";
       document.getElementById("bloco-9").style.backgroundColor = "blue"
       document.getElementById("bloco-9").firstChild.style.color = "white";
       setTimeout(function(){ alert("O Vencedor foi "+jogador1.value)},1000)
       setTimeout(function(){window.location.reload()},1500)
      }
      else if(document.getElementById("bloco-2").getAttribute("name") === jogador1.value && document.getElementById("bloco-5").getAttribute("name") === jogador1.value && document.getElementById("bloco-8").getAttribute("name") === jogador1.value){
       document.getElementById("bloco-2").style.backgroundColor = "blue"
       document.getElementById("bloco-2").firstChild.style.color = "white";
       document.getElementById("bloco-5").style.backgroundColor = "blue"
       document.getElementById("bloco-5").firstChild.style.color = "white";
       document.getElementById("bloco-8").style.backgroundColor = "blue"
       document.getElementById("bloco-8").firstChild.style.color = "white";
       setTimeout(function(){ alert("O Vencedor foi "+jogador1.value)},1000)
       setTimeout(function(){window.location.reload()},1500)
      }
      else if(document.getElementById("bloco-3").getAttribute("name") === jogador1.value && document.getElementById("bloco-6").getAttribute("name") === jogador1.value && document.getElementById("bloco-9").getAttribute("name") === jogador1.value){
       document.getElementById("bloco-3").style.backgroundColor = "blue";
       document.getElementById("bloco-3").firstChild.style.color = "white";
       document.getElementById("bloco-6").style.backgroundColor = "blue"
       document.getElementById("bloco-6").firstChild.style.color = "white";
       document.getElementById("bloco-9").style.backgroundColor = "blue"
       document.getElementById("bloco-9").firstChild.style.color = "white";
       setTimeout(function(){ alert("O Vencedor foi "+jogador1.value)},1000)
       setTimeout(function(){window.location.reload()},1500)
      }
      else if(document.getElementById("bloco-3").getAttribute("name") === jogador1.value && document.getElementById("bloco-5").getAttribute("name") === jogador1.value && document.getElementById("bloco-7").getAttribute("name") === jogador1.value){
       document.getElementById("bloco-3").style.backgroundColor = "blue"
       document.getElementById("bloco-3").firstChild.style.color = "white";
       document.getElementById("bloco-5").style.backgroundColor = "blue"
       document.getElementById("bloco-5").firstChild.style.color = "white";
       document.getElementById("bloco-7").style.backgroundColor = "blue"
       document.getElementById("bloco-7").firstChild.style.color = "white";
       setTimeout(function(){ alert("O Vencedor foi "+jogador1.value)},1000)
       setTimeout(function(){window.location.reload()},1500)
      }
      else if(document.getElementById("bloco-1").getAttribute("name") === jogador1.value && document.getElementById("bloco-4").getAttribute("name") === jogador1.value && document.getElementById("bloco-7").getAttribute("name") === jogador1.value){
       document.getElementById("bloco-1").style.backgroundColor = "blue"
       document.getElementById("bloco-1").firstChild.style.color = "white";
       document.getElementById("bloco-4").style.backgroundColor = "blue"
       document.getElementById("bloco-4").firstChild.style.color = "white";
       document.getElementById("bloco-7").style.backgroundColor = "blue"
       document.getElementById("bloco-7").firstChild.style.color = "white";
       setTimeout(function(){ alert("O Vencedor foi "+jogador1.value)},1000)
       setTimeout(function(){window.location.reload()},1500)
      }
      //jogador-2
      else if(document.getElementById("bloco-1").getAttribute("name") === jogador2.value && document.getElementById("bloco-2").getAttribute("name") === jogador2.value && document.getElementById("bloco-3").getAttribute("name") === jogador2.value ){
       document.getElementById("bloco-1").style.backgroundColor = "red"
       document.getElementById("bloco-1").firstChild.style.color = "white";
       document.getElementById("bloco-2").style.backgroundColor = "red";
       document.getElementById("bloco-2").firstChild.style.color = "white";
       document.getElementById("bloco-3").style.backgroundColor = "red";
       document.getElementById("bloco-3").firstChild.style.color = "white";
       setTimeout(function(){ alert("O Vencedor foi "+jogador2.value)},1000)
       setTimeout(function(){window.location.reload()},1500)
       
      }
      else if(document.getElementById("bloco-4").getAttribute("name") === jogador2.value && document.getElementById("bloco-5").getAttribute("name") === jogador2.value && document.getElementById("bloco-6").getAttribute("name") === jogador2.value){
       document.getElementById("bloco-4").style.backgroundColor = "red";
       document.getElementById("bloco-4").firstChild.style.color = "white";
       document.getElementById("bloco-5").style.backgroundColor = "red";
       document.getElementById("bloco-5").firstChild.style.color = "white";
       document.getElementById("bloco-6").style.backgroundColor = "red";
       document.getElementById("bloco-6").firstChild.style.color = "white";
       setTimeout(function(){ alert("O Vencedor foi "+jogador2.value)},1000)
       setTimeout(function(){window.location.reload()},1500)
      }
      else if(document.getElementById("bloco-7").getAttribute("name") === jogador2.value && document.getElementById("bloco-8").getAttribute("name") === jogador2.value && document.getElementById("bloco-9").getAttribute("name") === jogador2.value){
       document.getElementById("bloco-7").style.backgroundColor = "red";
       document.getElementById("bloco-7").firstChild.style.color = "white";
       document.getElementById("bloco-8").style.backgroundColor = "red";
       document.getElementById("bloco-8").firstChild.style.color = "white";
       document.getElementById("bloco-9").style.backgroundColor = "red";
       document.getElementById("bloco-9").firstChild.style.color = "white";
       setTimeout(function(){ alert("O Vencedor foi "+jogador2.value)},1000)
       setTimeout(function(){window.location.reload()},1500)
      }
      else if(document.getElementById("bloco-1").getAttribute("name") === jogador2.value && document.getElementById("bloco-5").getAttribute("name") === jogador2.value && document.getElementById("bloco-9").getAttribute("name") === jogador2.value){
       document.getElementById("bloco-1").style.backgroundColor = "red";
       document.getElementById("bloco-1").firstChild.style.color = "white";
       document.getElementById("bloco-5").style.backgroundColor = "red";
       document.getElementById("bloco-5").firstChild.style.color = "white";
       document.getElementById("bloco-9").style.backgroundColor = "red";
       document.getElementById("bloco-9").firstChild.style.color = "white";
       setTimeout(function(){ alert("O Vencedor foi "+jogador2.value)},1000)
       setTimeout(function(){window.location.reload()},1500)
      }
      else if(document.getElementById("bloco-2").getAttribute("name") === jogador2.value && document.getElementById("bloco-5").getAttribute("name") === jogador2.value && document.getElementById("bloco-8").getAttribute("name") === jogador2.value){
       document.getElementById("bloco-2").style.backgroundColor = "red";
       document.getElementById("bloco-2").firstChild.style.color = "white";
       document.getElementById("bloco-5").style.backgroundColor = "red";
       document.getElementById("bloco-5").firstChild.style.color = "white";
       document.getElementById("bloco-8").style.backgroundColor = "red";
       document.getElementById("bloco-8").firstChild.style.color = "white";
       setTimeout(function(){ alert("O Vencedor foi "+jogador2.value)},1000)
       setTimeout(function(){window.location.reload()},1500)
      }
      else if(document.getElementById("bloco-3").getAttribute("name") === jogador2.value && document.getElementById("bloco-6").getAttribute("name") === jogador2.value && document.getElementById("bloco-9").getAttribute("name") === jogador2.value){
       document.getElementById("bloco-3").style.backgroundColor = "red";
       document.getElementById("bloco-3").firstChild.style.color = "white";
       document.getElementById("bloco-6").style.backgroundColor = "red";
       document.getElementById("bloco-6").firstChild.style.color = "white";
       document.getElementById("bloco-9").style.backgroundColor = "red";
       document.getElementById("bloco-9").firstChild.style.color = "white";
       setTimeout(function(){ alert("O Vencedor foi "+jogador2.value)},1000)
       setTimeout(function(){window.location.reload()},1500)
      }
      else if(document.getElementById("bloco-3").getAttribute("name") === jogador2.value && document.getElementById("bloco-5").getAttribute("name") === jogador2.value && document.getElementById("bloco-7").getAttribute("name") === jogador2.value){
       document.getElementById("bloco-3").style.backgroundColor = "red";
       document.getElementById("bloco-3").firstChild.style.color = "white";
       document.getElementById("bloco-5").style.backgroundColor = "red";
       document.getElementById("bloco-5").firstChild.style.color = "white";
       document.getElementById("bloco-7").style.backgroundColor = "red";
       document.getElementById("bloco-7").firstChild.style.color = "white";
       setTimeout(function(){ alert("O Vencedor foi "+jogador2.value)},1000)
       setTimeout(function(){window.location.reload()},1500)
      }
      else if(document.getElementById("bloco-1").getAttribute("name") === jogador2.value && document.getElementById("bloco-4").getAttribute("name") === jogador2.value && document.getElementById("bloco-7").getAttribute("name") === jogador2.value){
       document.getElementById("bloco-1").style.backgroundColor = "red";
       document.getElementById("bloco-1").firstChild.style.color = "white";
       document.getElementById("bloco-4").style.backgroundColor = "red";
       document.getElementById("bloco-4").firstChild.style.color = "white";
       document.getElementById("bloco-7").style.backgroundColor = "red";
       document.getElementById("bloco-7").firstChild.style.color = "white";
       setTimeout(function(){ alert("O Vencedor foi "+jogador2.value)},1000)
       setTimeout(function(){window.location.reload()},1500)
      }else{
        if(contadorDeClicks == 9){
            setTimeout(function(){ alert("Empate!")},1000)
       setTimeout(function(){window.location.reload()},1500)
        }
      }
  })
 })
}

const confirm1 = document.getElementById("confirm-1")
confirm1.addEventListener("click",function(){
  if (document.querySelector('input[id="jogador-1"]').value!=="") {
    document.querySelector('input[id="jogador-1"]').setAttribute("disabled","disabled");
    confirm1.setAttribute("disabled","disabled")
  }
})

const confirm2 = document.getElementById("confirm-2");
confirm2.addEventListener("click",function(){
  if (document.querySelector('input[id="jogador-1"]').value!=="") {
    document.querySelector('input[id="jogador-2"]').setAttribute("disabled","disabled");
    confirm2.setAttribute("disabled", "disabled");
  }
})
turno()































// let acumulador = 0;
// document.querySelectorAll("div").forEach(function (div) {
//   div.addEventListener("click", function (event) {
//     console.log(event.currentTarget);
//     acumulador++;

//     if (acumulador % 2 === 0) {
//       document.querySelector('input[id="jogador-1"]').style.border =
//         "2px solid #ff0000";
//         document.querySelector('input[id="jogador-2"]').style.removeProperty("border")
//       // document.querySelector('input[id="jogador-1"]').style.borderStyle = "solid"
//       // document.querySelector('input[id="jogador-1"]').style.borderBotton = "#ff0000!important"
//     } else {
//       document.querySelector('input[id="jogador-2"]').style.border =
//         "2px solid #0000ff";
//         document.querySelector('input[id="jogador-1"]').style.removeProperty("border")
//     }
//     console.log(acumulador);
//   });
// });

// let btnConfirm1 = document.getElementById("confirm-1");
// let input1 = document.getElementById("jogador-1");

// btnConfirm1.addEventListener("click", function () {
//   if (input1.value !== "") {
//     input1.setAttribute("disabled", "disabled");
//     btnConfirm1.setAttribute("disabled", "disabled");
//   }
// });

// let btnConfirm2 = document.getElementById("confirm-2");
// let input2 = document.getElementById("jogador-2");

// btnConfirm2.addEventListener("click", function () {
//   if (input2.value !== "") {
//     input2.setAttribute("disabled", "disabled");
//     btnConfirm2.setAttribute("disabled", "disabled");
//   }
// });
