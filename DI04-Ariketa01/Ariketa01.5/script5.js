function obtenerPrimos() {
    let entre = parseFloat(document.getElementById("zbk1").value) || 0;
    let hasta = parseFloat(document.getElementById("zbk2").value) || 0;
    const primos = [];
    for (let i = entre; i <= hasta; i++) { // for bat sartu ditugun bi zenbakien artean lehenak bilatzeko
      if (esPrimo(i)) { // Zenbakia lehena bada arrayan gehitzen dugu
        primos.push(i); 
      }
    }
    //h2-an idazteko
    document.getElementById("emaitza").innerText = entre + " eta " + hasta + " arteko zenbaki lehenak: " + primos.join(", ");
}

//jakiteko ia zenbakia lehena den edo ez
function esPrimo(num) {
    if (num < 2) return false; // Bi baino zenbaki txikiagoak ez dira lehenak orduan kentzen ditugu jarraian
    for (let i = 2; i <= Math.sqrt(num); i++) { // for bat begiratzeko ea lehenak diren
      if (num % i === 0) {
        return false; // lehenak ez direnak etafuntziotik ateratzeko
      }
    }
    return true; // Lehenak direnak true moduan ateratzen dira
}