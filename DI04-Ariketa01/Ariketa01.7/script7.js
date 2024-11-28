function kalkulatu() {
    let bihurketa = parseFloat(document.getElementById("bihurketa").value) || 0;
    let tenperatura = parseFloat(document.getElementById("tenperatura").value) || 0;
    let emaitza;
    if (bihurketa == 1){
      emaitza = (tenperatura * (9/5)) + 32;
      document.getElementById("emaitza").innerText = tenperatura + " gradu Celsius " + emaitza + " gradu Fahrenhet dira.";
    } else if (bihurketa == 2){
      emaitza = (tenperatura - 32) * (5/9);
      document.getElementById("emaitza").innerText = tenperatura + " gradu Fahrenhet " + emaitza + " gradu Celsius dira.";
    } else {
      document.getElementById("emaitza").innerText = "Sartu bihurketaren galderan 1 edo 2 mesedez.";
    }
}