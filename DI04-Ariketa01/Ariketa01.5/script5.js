function obtenerPrimos() {
    let entre = parseFloat(document.getElementById("zbk1").value) || 0;
    let hasta = parseFloat(document.getElementById("zbk2").value) || 0;
    const primos = [];
    for (let i = entre; i <= hasta; i++) {
      if (esPrimo(i)) {
        primos.push(i); // Si el número es primo, lo agregamos al array
      }
    }
    document.getElementById("emaitza").innerText = entre + " eta " + hasta + " arteko zenbaki lehenak: " + primos.join(", ");
}

function esPrimo(num) {
    if (num < 2) return false; // Los números menores que 2 no son primos
    for (let i = 2; i <= Math.sqrt(num); i++) { // Solo verificamos hasta la raíz cuadrada del número
      if (num % i === 0) {
        return false; // Si es divisible por algún número, no es primo
      }
    }
    return true; // Es primo si no encontró divisores
}