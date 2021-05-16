var svgNS = "http://www.w3.org/2000/svg";
function nacrtajRubove() {
  var crtanje = document.getElementById("gornjiLijevi");
  while (crtanje.childNodes.length) crtanje.removeChild(crtanje.childNodes[0]);
  var visina = crtanje.clientHeight;
  var sirina = crtanje.clientWidth;
  if (!visina || !sirina) {
    visina = crtanje.parentNode.clientHeight;
    sirina = crtanje.parentNode.clientWidth / 4;
  }
  var elipsa = document.createElementNS(svgNS, "ellipse");
  elipsa.setAttribute("cx", sirina);
  elipsa.setAttribute("cy", visina);
  elipsa.setAttribute("rx", sirina);
  elipsa.setAttribute("ry", visina);
  elipsa.setAttribute("fill", "#ffaaff");
  crtanje.appendChild(elipsa);
  for (var i = 0; i < 30; i++) {
    var kut1 = (270 + i * 3) / 57.3;
    var kut2 = (274 + i * 3) / 57.3;
    var x1 = Math.round(sirina - Math.cos(kut1) * sirina);
    var x2 = Math.round(sirina - Math.cos(kut2) * sirina);
    var y1 = Math.round(visina + Math.sin(kut1) * visina);
    var y2 = Math.round(visina + Math.sin(kut2) * visina);
    var trokut = document.createElementNS(svgNS, "polygon");
    trokut.setAttribute(
      "points",
      x1 + "," + y1 + " " + x2 + "," + y2 + " " + sirina + "," + visina
    );
    trokut.setAttribute(
      "fill",
      "rgb(" +
        Math.round(255 - i * 2.83) +
        ",170," +
        Math.round(170 + i * 2.83) +
        ")"
    );
    crtanje.appendChild(trokut);
  }
  crtanje = document.getElementById("gornjiDesni");
  while (crtanje.childNodes.length) crtanje.removeChild(crtanje.childNodes[0]);
  var elipsa = document.createElementNS(svgNS, "ellipse");
  elipsa.setAttribute("cx", 0);
  elipsa.setAttribute("cy", visina);
  elipsa.setAttribute("rx", sirina);
  elipsa.setAttribute("ry", visina);
  elipsa.setAttribute("fill", "#ffffaa");
  crtanje.appendChild(elipsa);
  for (var i = 0; i < 30; i++) {
    var kut1 = (i * 3) / 57.3;
    var kut2 = (4 + i * 3) / 57.3;
    var x1 = Math.round(Math.cos(kut1) * sirina);
    var x2 = Math.round(Math.cos(kut2) * sirina);
    var y1 = Math.round(visina - Math.sin(kut1) * visina);
    var y2 = Math.round(visina - Math.sin(kut2) * visina);
    var trokut = document.createElementNS(svgNS, "polygon");
    trokut.setAttribute(
      "points",
      x1 + "," + y1 + " " + x2 + "," + y2 + " 0," + visina
    );
    trokut.setAttribute(
      "fill",
      "rgb(255," + Math.round(255 - i * 2.83) + ",170)"
    );
    crtanje.appendChild(trokut);
  }
}
nacrtajRubove();
window.addEventListener("resize", nacrtajRubove);
