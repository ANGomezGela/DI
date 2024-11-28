function kalkulatuTxakurrarenAdina() {
    // Hartzen ditugu input-aren balioa eta gordetzen duguu let aldagaiean, 
    // parseFloat erabiltzen dugu, zenbakia decimal batean gordetzeko, ez dutenean ezer idazten defektuko balioa 0 izango da.
    let adina = parseFloat(document.getElementById("adina").value) || 0;
  
    // Aldagai berri bat sortzen dugu eta kalkulatzen dugu  txakakurraren adina
    let txakurAdina = adina * 7;
  
    // Bilatzen dugu id buruz h2 idazteko
    document.getElementById("emaitza").innerText = "Txakurrak " + txakurAdina + " urte ditu giza urteetan.";
  }