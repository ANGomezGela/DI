function fibonaci() {
    let kopurua = parseFloat(document.getElementById("kopurua").value) || 0;
    let zbk1 = 0;
    let zbk2 = 1;
    let zbk3;
    const lista = [];
    lista.push(zbk1);
    lista.push(zbk2);
    for (let i = 3; i <= kopurua; i++) {
      zbk3 = zbk1 + zbk2;
      zbk1 = zbk2;
      zbk2 = zbk3;
      lista.push(zbk3); //Agregamos el numero de la suma
    }
    document.getElementById("emaitza").innerText = "Fibonaci sekuentzia " + kopurua + " zenbakiekin: " + lista.join(", ");
}