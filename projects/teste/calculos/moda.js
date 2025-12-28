export function moda(numbes) {
  let parseToSring = numbes + "";
  let arrayToSring = parseToSring.split("");
  let arrayOfNumberTranslate = arrayToSring.map((numero) => Number(numero));
  const repeatedValues = arrayOfNumberTranslate.filter(
    (e, i, a) => a.indexOf(e) !== i
  );

  if (arrayOfNumberTranslate.length>0) {
    if (repeatedValues.length > 0) {
      document.getElementById("saida").value = `${repeatedValues}`;
    } else {
      document.getElementById("saida").value = "Não há números repetidos";
    }
  } else {
    document.getElementById("saida").value = "";
  }
}
