class Calculadora {
  constructor() {
    this.visorDeEntrada = document.getElementById("visor-de-entrada");
    this.visorDeSaida = document.getElementById("visor-de-saida");
    this.buttons = document.querySelectorAll("button");
    this.iniciarVisor();
  }

  // Inicializa ambos os visores com "0"
  iniciarVisor() {
    if (this.visorDeEntrada.innerText === "") {
      this.visorDeEntrada.innerText = "0";
    }
    if (this.visorDeSaida.innerText === "") {
      this.visorDeSaida.innerText = "0";
    }
  }

  // Limpa ambos os visores e define "0"
  clear() {
    this.visorDeEntrada.innerText = "0"; // Resetar para "0"
    this.visorDeSaida.innerText = "0"; // Resetar para "0"
  }

  // Função para processar a expressão matemática
  calculo(visor) {
    try {
      let expressao = visor.replace(/x/g, "*"); // Substitui 'x' por '*' para multiplicação
      let resultado = eval(expressao); // Avalia a expressão matemática

      // Exibe o resultado nos visores de entrada e saída
      calc.visorDeEntrada.innerText = resultado;
      calc.visorDeSaida.innerText = resultado;

      // Se o resultado for muito longo, arredonda para 5 casas decimais
      if (calc.visorDeEntrada.innerText.length > 13) {
        calc.visorDeEntrada.innerText = parseFloat(resultado).toFixed(5);
        calc.visorDeSaida.innerText = parseFloat(resultado).toFixed(5);
      }
    } catch (error) {
      calc.visorDeEntrada.innerText = "Erro";
      calc.visorDeSaida.innerText = "Erro";
    }
  }
}

let calc = new Calculadora();

calc.buttons.forEach((element) => {
  element.addEventListener("click", () => {
    // Efeito de estilo ao pressionar o botão
    function efeitoTeclaPressionada() {
      element.style.backgroundColor = "rgba(51, 48, 48, 0.233)";
      element.style.color = "#fff";
      element.style.fontSize = "17px";
      element.style.border = "1px solid white";
      if (element.id == "botao-apagar") {
        element.style.backgroundColor = "rgba(255, 0, 0, 0.705)";
      }
      setTimeout(() => {
        element.style.backgroundColor = "rgb(66, 66, 66)";
        element.style.color = "#ffffff";
        element.style.fontSize = "25px";
        element.style.fontSize = "20px";
        element.style.border = "none";
        if (element.id == "botao-apagar") {
          element.style.backgroundColor = "red";
        }
      }, 300);
    }
    efeitoTeclaPressionada();

    // Lógica de inserir números e substituir "0" ao clicar no primeiro número
    if (
      calc.visorDeEntrada.innerText === "0" &&
      element.innerText !== "AC" &&
      element.innerText !== "="
    ) {
      calc.visorDeEntrada.innerText = element.innerText;
    } else if (
      calc.visorDeEntrada.innerText.length < 20 &&
      element.innerText !== "AC" &&
      element.innerText !== "="
    ) {
      calc.visorDeEntrada.innerText += element.innerText;
    }

    // Lógica para os botões "AC" e "="
    let botaoClicado = element.innerText;
    switch (botaoClicado) {
      case "AC":
        calc.clear(); // Limpa ambos os visores e define "0"
        break;
      case "=":
        calc.calculo(calc.visorDeEntrada.innerText); // Realiza o cálculo
        break;
      default:
        break;
    }
  });
});
