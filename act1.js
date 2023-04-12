// 1.	Escriba un algoritmo que lea un número entero y determine si es par o impar.
// Si es par, que escriba todos los pares de manera descendiente desde sí mismo y hasta el cero.
//  Si es impar, que escriba todos los impares de manera descendiente desde si sí mismo hasta el uno.
//  Utilice la instrucción LEER NUMERO al inicio del programa para cargar un número en la variable NUMERO.

let esPar = false;

function leerNumero(numero) {
  if (numero % 2 == 0) {
    esPar = true;
    for (let i = numero; i >= 0; i--) {
      if (numero % 2 == 0) {
        console.log(numero);
      }
      numero--;
    }
  } else {
    for (let i = numero; i > 0; i--) {
      if (numero % 2 != 0) {
        console.log(numero);
      }
      numero--;
    }
  }
}

function getResult() {
  leerNumero(20);
  leerNumero(11);

  console.log(esPar);
}

getResult();
