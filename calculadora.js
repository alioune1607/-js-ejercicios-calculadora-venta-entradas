let operacion = Number(prompt('Que operación desea hacer: 1- Suma➕ || 2- Resta➖ || 3- Multiplicación✖️ || 4- División➗'));
let numero1 = Number(prompt('Ingrese el primer número'));
let numero2 = Number(prompt('Ingrese el segundo número'));
let total;

if (numero1 === "" || numero2 === "") {
    alert('Error: Por favor, ingrese ambos números.');
  } else if (isNaN(numero1) || isNaN(numero2)) {
    alert('Error: Por favor, ingrese números válidos.');
  } else {
    numero1 = Number(numero1);
    numero2 = Number(numero2);
    let total;
  
    if (operacion == 1) {
      total = numero1 + numero2;
      alert('El resultado de la operación es ' + total);
    } else if (operacion == 2) {
      total = numero1 - numero2;
      alert('El resultado de la operación es ' + total);
    } else if (operacion == 3) {
      total = numero1 * numero2;
      alert('El resultado de la operación es ' + total);
    } else if (operacion == 4) {
      if (numero2 === 0) {
        alert('Error: No se puede operación por cero.');
      } else {
        total = numero1 / numero2;
        alert('El resultado de la operación es ' + total);
      }
    } else {
      alert('Opcion de operacion incorrecta');
    }
  }