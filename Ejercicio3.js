let numeros = ["1", "2", "3", "4", "5", "6"];
function sumaDeLosParesDel0Al(numeros) {
  let suma = 0;
  for (let numeros = 1; i < numeros.lenght; i++) {
    if (numeros % 2 === 0) {
      console.log(numeros[i], "valor de la supocicion");
      suma += i;
      console.log(sumas, "valor parcial de la suma");
    }
  }
  return suma;
}
console.log(sumaDeLosParesDel0Al(numeros));
