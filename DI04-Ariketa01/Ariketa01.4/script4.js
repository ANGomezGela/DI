function kalkulatuDeskontua() {
    // Hartzen ditugu input-aren balioa eta gordetzen duguu let aldagaiean, 
    // parseFloat erabiltzen dugu, zenbakia decimal batean gordetzeko, ez dutenean ezer idazten defektuko balioa 0 izango da.
    let jatorria = parseFloat(document.getElementById("jatorria").value) || 0;
    let deskontua = parseFloat(document.getElementById("deskontua").value) || 0;
  
    // Aldagai berri bat sortzen dugu eta kalkulatzen dugu dekontua
    let prezioa = jatorria * ((100 - deskontua)/100);

    // Bilatzen dugu id buruz h2 idazteko
    document.getElementById("emaitza").innerText = "Produktuaren azken prezioa %" + deskontua + "ko deskontua aplikatu ondoren " + prezioa + " eurokoa da.";
}