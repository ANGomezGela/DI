function kalkulatuGuztizkoKostua() {
    // Hartzen ditugu input-ren bailioak eta gordetzen ditugu let aldagaileetan, 
    // parseFloat erabiltzen dugu, zenbakia decimal batean gordetzeko, ez dutenean ezer idazten defektuko balioa 0 izango da.
    let ostatu = parseFloat(document.getElementById("ostatu").value) || 0;
    let elikadura = parseFloat(document.getElementById("elikadura").value) || 0;
    let entretenimendu = parseFloat(document.getElementById("entretenimendu").value) || 0;
  
    // Aldagai berri bat sortzen dugu eta kalkulatzen dugu guztizko kostua
    let guztizkoKostua = ostatu + elikadura + entretenimendu;
  
    // Bilatzen dugu id buruz h2 idazteko guztizko kostua innerText-ekin
    document.getElementById("emaitza").innerText = "Bidaiaren guztizko kostua " + guztizkoKostua + " € da.";
  }