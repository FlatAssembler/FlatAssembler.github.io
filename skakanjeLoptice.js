var udaraca = 0;
var loptica = document.getElementById("loptica");
var pocetna = loptica.parentNode.clientHeight + 200 - 100;
loptica.style.top = pocetna;
loptica.style.right = loptica.parentNode.clientWidth / 2 - 50;
var h = 0;
var gk = 1;
var v = 15;
window.setInterval(pomakniLopticu, 80);
window.addEventListener("resize", promijeniPocetnu);
function promijeniPocetnu() {
  pocetna = loptica.parentNode.clientHeight + 210 - 100;
  loptica.style.top = pocetna;
  loptica.style.right = loptica.parentNode.clientWidth / 2 - 50;
  h = 0;
  gk = 1;
  v = 15;
}
function pomakniLopticu() {
  h += v;
  v -= gk;
  if (h < 0) {
    v = -v * 0.75;
    h = 0;
    udaraca++;
    if (udaraca > 20) {
      udaraca = 0;
      v = 15;
    }
  }
  loptica.style.top = pocetna - h;
}
