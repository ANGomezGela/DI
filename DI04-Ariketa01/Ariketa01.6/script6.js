function fibonaci() {
    let kopurua = parseFloat(document.getElementById("kopurua").value) || 0;
    //Fabonaci sekuentzia beti hasten da 0 eta 1 zenbakiarekin horregatik lehenengo bi zenbakiak 0 eta 1 dira
    let zbk1 = 0;
    let zbk2 = 1;
    let zbk3;

    //Array bat egiten dugu sekuentzia gordetzeko
    const lista = [];

    //Array-ri gehitzen diogu lehenengo bi zenbakiak
    lista.push(zbk1);
    lista.push(zbk2);

    //For bat egiten dugu nahi ditugun zenbaki kopuru array barruan gordetzeko
    for (let i = 3; i <= kopurua; i++) {
      zbk3 = zbk1 + zbk2;
      zbk1 = zbk2;
      zbk2 = zbk3;
      lista.push(zbk3); //Agregamos el numero de la suma
    }

    //h2-an idazten dugu
    document.getElementById("emaitza").innerText = "Fibonaci sekuentzia " + kopurua + " zenbakiekin: " + lista.join(", ");
}