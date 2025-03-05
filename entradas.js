function calcularPrecio() {
    let edad = document.getElementById('edad').value;
    let precioEntrada = document.getElementById('precio-entrada');
    let mensajeError = document.getElementById('mensaje-error');

    precioEntrada.textContent = '';
    mensajeError.textContent = '';

    if (edad === '') {
        mensajeError.textContent = 'Error: Por favor, introduce tu edad.';
        return;
    }

    if (isNaN(edad)) {
        mensajeError.textContent = 'Error: Introduce una edad válida (número).';
        return;
    }

    edad = parseInt(edad);

    if (edad < 0) {
        mensajeError.textContent = 'Error: La edad no puede ser negativa.';
        return;
    }

    // Calcular el precio de la entrada
    let precio;
    if (edad < 12) {
        precio = 'Entrada gratuita.';
    } else if (edad >= 12 && edad <= 18) {
        precio = 'Precio reducido.';
    } else {
        precio = 'Precio completo.';
    }

    precioEntrada.textContent = 'Precio de la entrada: ' + precio;
}