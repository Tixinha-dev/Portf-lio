export function mediaAritmeticaPonderada(numbes) {
  let parseToSring = numbes + "";
  let arrayToSring = parseToSring.split("");
  let arrayOfNumberTranslate = arrayToSring.map((numero) => Number(numero));
  let arrayDeNumeros = [];
  let arrayDePesos = [];
  let somaDasMultiplicacoesNumerosEPesos = 0;
  let somaDosPesos = 0;

  arrayOfNumberTranslate.forEach((element, index) => {
    if (index % 2 === 0) {
      arrayDeNumeros.push(element);
    } else {
      arrayDePesos.push(element);
    }
  });
  if (arrayDeNumeros.length > 0) {
    if (arrayDeNumeros.length == arrayDePesos.length) {
      for (let i = 0; i < arrayDeNumeros.length; i++) {
        somaDasMultiplicacoesNumerosEPesos +=
          arrayDeNumeros[i] * arrayDePesos[i];
        somaDosPesos += arrayDePesos[i];
      }
      document.getElementById("saida").value = `${
        somaDasMultiplicacoesNumerosEPesos / somaDosPesos
      }`;
    } else {
      document.getElementById("saida").value = "Não é possivel calcular...";
    }
  } else {
    document.getElementById("saida").value = "";
  }
}
