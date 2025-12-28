export function mediaAritmeticaSimples(numbes) {
  let parseToSring = numbes + "";
  let arrayToSring = parseToSring.split("");
  let arrayOfNumberTranslate = arrayToSring.map((numero) => Number(numero));
  let acumulador = 0;
  if (arrayOfNumberTranslate.length > 0) {
    for (const value of arrayOfNumberTranslate) {
      acumulador = acumulador + value;
    }
    document.getElementById("saida").value = `${
      acumulador / arrayOfNumberTranslate.length
    }`;
  } else {
    document.getElementById("saida").value = "";
  }
}
