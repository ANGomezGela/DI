function kalkulatuGMI() {
    // Hartzen ditugu input-aren balioa eta gordetzen duguu let aldagaiean, 
    // parseFloat erabiltzen dugu, zenbakia decimal batean gordetzeko, ez dutenean ezer idazten defektuko balioa 0 izango da.
    let pisua = parseFloat(document.getElementById("pisua").value) || 0;
    let altuera = parseFloat(document.getElementById("altuera").value) || 0;
  
    // Aldagai berri bat sortzen dugu eta kalkulatzen dugu guztizko kostua
    let GMI = (pisua / altuera)^2;

    let sailkapena = "";
    if (GMI < 18.5) {
      sailkapena = "Baxua";
    } else if (18.5 < GMI < 24.9) {
      sailkapena = "Normala";
    } else if (24.9 < GMI < 29.9){
      sailkapena = "Altua";
    } else {
      sailkapena = "Obesitatea";
    }
    // Bilatzen dugu id buruz h2 idazteko guztizko kostua innerText-ekin
    document.getElementById("emaitza").innerText = "GMI " + GMI + " \nSalikapena: " + sailkapena;
}