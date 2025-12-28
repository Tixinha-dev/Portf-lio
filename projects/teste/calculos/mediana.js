/*
- **Mediana:** Pode ser calculada encontrando o valor central de uma sequência de números crescente ou decrescente. Caso existam dois números centrais, a mediana é calculada através da média aritmética simples desses dois números.
    
    Exemplo:
    
    ```jsx
    mediana(2, 4, 5, 7, 42, 99) === 6
    // porque 5 e 7 estão juntos no centro da sequência e
    media(5, 7) === 6
    
    mediana(15, 14, 8, 7, 3) === 8
    // porque 8 está no centro da sequência
    ```
  */
export function mediana(numbes) {
  let parseToSring = numbes + "";
  let arrayToSring = parseToSring.split("");
  let arrayOfNumberTranslate = arrayToSring.map((numero) => Number(numero));

  if (arrayOfNumberTranslate.length > 0) {
    if (arrayOfNumberTranslate.length % 2 === 0) {
      while (arrayOfNumberTranslate.length > 2) {
        arrayOfNumberTranslate.shift();
        arrayOfNumberTranslate.pop();

        if (arrayOfNumberTranslate.length === 2) {
          document.getElementById("saida").value = `${arrayOfNumberTranslate}`;
        }
      }
    } else {
      while (arrayOfNumberTranslate.length > 1) {
        arrayOfNumberTranslate.shift();
        arrayOfNumberTranslate.pop();

        if (arrayOfNumberTranslate.length === 1) {
          document.getElementById("saida").value = `${arrayOfNumberTranslate}`;
        }
      }
    }
  }else{
      document.getElementById("saida").value = "";
  }
}
