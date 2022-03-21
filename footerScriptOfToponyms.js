function toggle(naziv) {
  var element = document.getElementById(naziv);
  if (element.style.display == "none") element.style.display = "inline";
  else element.style.display = "none";
}
if (navigator.appName == "Microsoft Internet Explorer") {
  var niz = document.getElementsByTagName("div");
  for (var i = 0; i < niz.length; i++) {
    if (niz[i].className.indexOf("link1") == -1) continue;
    niz[i].onmouseenter = function () {
      this.children[0].style.display = "inline";
    };
    niz[i].onmouseleave = function () {
      this.children[0].style.display = "none";
    };
  }
  document.getElementById("glavni").removeAttribute("style");
  document.body.style.backgroundImage = "";
} else if (navigator.appName == "Opera") {
  document.getElementById("glavni").style.color = "black";
  document.getElementById("glavni").style.backgroundColor = "white";
  var gornjiDesni = document.getElementById("gornjiDesni");
  gornjiDesni.parentNode.removeChild(gornjiDesni);
  document.body.style.backgroundImage = "";
} else if (
  (((navigator.userAgent.indexOf("Safari") + 1 ||
    navigator.userAgent.indexOf("WebKit") + 1) &&
    navigator.userAgent.indexOf("Mobile") + 1 &&
    (!(navigator.userAgent.indexOf("Chrome") + 1) ||
      (navigator.userAgent.indexOf("Version") + 1 &&
        navigator.userAgent.indexOf("Chrome") + 1))) ||
    (navigator.userAgent.indexOf("Mobile") + 1 &&
      navigator.userAgent.indexOf("Gecko") + 1 &&
      !(navigator.userAgent.indexOf("like Gecko") + 1) &&
      !(navigator.userAgent.indexOf("Dolfin") + 1))) &&
  !(navigator.userAgent.indexOf("iPad") + 1) &&
  !(navigator.userAgent.indexOf("iPhone") + 1)
)
  document.getElementById("glavni").style.fontSize = "36px";
else if (navigator.userAgent.indexOf("Mobi") + 1) {
  document.head.innerHTML +=
    '<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">';
  var niz = document.getElementsByTagName("svg");
  for (var i = 0; i < niz.length; i++) niz[i].style.display = "none";
  document.getElementsByTagName("aside")[0].style.display = "none";
  document.getElementsByTagName("aside")[0].style.float = "none";
  document.getElementsByTagName("aside")[0].style.width = "100%";
  document.getElementsByTagName("aside")[0].style.height = "auto";
  niz = document.getElementsByClassName("popup");
  for (var i = 0; i < niz.length; i++) {
    niz[i].style.width = "50%";
    niz[i].style.left = "45%";
    niz[i].style.maxWidth = "none";
  }
  document.getElementsByTagName("section")[0].style.height = "auto";
  document.getElementsByTagName("section")[0].style.float = "none";
  document.getElementsByTagName("section")[0].style.width = "100%";
  document.getElementsByTagName("header")[0].style.height = "auto";
  document.getElementsByTagName("header")[0].style.lineHeight = "normal";
  document.getElementById("naslov").style.height = "auto";
  document.getElementById("titleContainer").style.transform = "";
  document.getElementsByTagName("main")[0].style.width = "100%";
  document.getElementsByTagName("footer")[0].children[0].style.display =
    "inline";
  document.getElementsByTagName("footer")[0].children[0].style.float = "none";
  document.getElementsByTagName("footer")[0].children[0].innerHTML +=
    "<br/><br/>";
  document.getElementsByTagName("footer")[0].style.height = "auto";
  document.getElementsByTagName("footer")[0].style.lineHeight = "normal";
  document.getElementsByTagName("header")[0].outerHTML +=
    '<button id="showNavigation" style="width:100%;line-height:36px;height:41px;">Show navigation</button>';
  document.getElementById("showNavigation").onclick = function () {
    if (document.getElementsByTagName("aside")[0].style.display == "none") {
      this.innerHTML = "Hide navigation";
      document.getElementsByTagName("aside")[0].style.display = "block";
    } else {
      this.innerHTML = "Show navigation";
      document.getElementsByTagName("aside")[0].style.display = "none";
    }
  };
  //window.setTimeout(function(){document.body.removeChild(document.body.children[document.body.children.length-1]);},1000);
  document.getElementById("naslov").style.width = "100%";
  document.getElementById("naslov").style.float = "none";
  document.getElementsByTagName("header")[0].style.backgroundColor =
    document.getElementById("naslov").style.backgroundColor;
  document.getElementsByTagName("footer")[0].children[1].style.display =
    "inline";
  document.getElementsByTagName("footer")[0].children[1].style.width = "100%";
  document.getElementsByTagName("footer")[0].children[1].style.float = "none";
  document.getElementsByTagName("footer")[0].style.backgroundColor =
    document.getElementsByTagName(
      "footer"
    )[0].children[0].style.backgroundColor;
}
function footerScript() {
  var crtanje = document.getElementById("donjiLijevi");
  while (crtanje.childNodes.length) crtanje.removeChild(crtanje.childNodes[0]);
  var visina = crtanje.clientHeight;
  var sirina = crtanje.clientWidth;
  if (!visina || !sirina) {
    visina = crtanje.parentNode.clientHeight;
    sirina = crtanje.parentNode.clientWidth / 4;
  }
  var elipsa = document.createElementNS(svgNS, "ellipse");
  elipsa.setAttribute("cx", sirina);
  elipsa.setAttribute("cy", 0);
  elipsa.setAttribute("rx", sirina);
  elipsa.setAttribute("ry", visina);
  elipsa.setAttribute("fill", "#aaffaa");
  crtanje.appendChild(elipsa);
  for (var i = 0; i < 30; i++) {
    var kut1 = (270 + i * 3) / 57.3;
    var kut2 = (274 + i * 3) / 57.3;
    var x1 = Math.round(sirina - Math.cos(kut1) * sirina);
    var x2 = Math.round(sirina - Math.cos(kut2) * sirina);
    var y1 = -Math.round(Math.sin(kut1) * visina);
    var y2 = -Math.round(Math.sin(kut2) * visina);
    var trokut = document.createElementNS(svgNS, "polygon");
    trokut.setAttribute(
      "points",
      x1 + "," + y1 + " " + x2 + "," + y2 + " " + sirina + ",0"
    );
    trokut.setAttribute(
      "fill",
      "rgb(170," +
        Math.round(255 - i * 2.83) +
        "," +
        Math.min(Math.round(170 + i * 4), 255) +
        ")"
    );
    crtanje.appendChild(trokut);
  }
}
footerScript();
window.addEventListener("resize", footerScript);
var niz = document.getElementsByClassName("map");
for (var i = 0; i < niz.length; i++) {
  niz[i].style.textDecoration = "underline";
  niz[i].style.cursor = "pointer";
  niz[i].setAttribute("target", "_blank");
  var lookUp;
  if (
    niz[i].getAttribute("data-look") &&
    niz[i].getAttribute("data-look") != ""
  )
    lookUp = niz[i].getAttribute("data-look");
  else lookUp = niz[i].textContent.replace(/\s/g, "+") + ",+Hrvatska";
  niz[i].setAttribute(
    "href",
    "https://www.google.com/maps/search/" + lookUp + "/"
  );
}
function setCodeToAppropriateWidth() {
  var niz = document.getElementsByClassName("code");
  var graphBottomOffset =
    document.getElementById("graph").offsetTop +
    document.getElementById("graph").offsetHeight;
  var glavniWidth = document.getElementById("glavni").clientWidth;
  for (var i = 0; i < niz.length; i++) {
    if (
      niz[i].id == "CProgram" ||
      niz[i].id == "huffman_code" ||
      niz[i].id == "markov" ||
      niz[i].id == "huffman_in_javascript" ||
      niz[i].id == "entropy_in_octave" ||
      niz[i].id == "entropy_in_matlab" ||
      niz[i].id == "conclusion_in_NodeJS"
    )
      continue;
    if (niz[i].offsetTop > graphBottomOffset) niz[i].style.width = "auto";
    else niz[i].style.width = glavniWidth / 2 - 15 + "px";
  }
}
window.addEventListener("resize", setCodeToAppropriateWidth);
setCodeToAppropriateWidth();
if (/Mobile/.test(navigator.userAgent)) {
  var abbreviations = document.getElementsByTagName("abbr");
  for (var i = 0; i < abbreviations.length; i++) {
    abbreviations[i].abbreviation = abbreviations[i].innerText;
    abbreviations[i].onmouseenter = function () {
      this.innerText =
        this.abbreviation + " (" + this.getAttribute("title") + ")";
    };
    abbreviations[i].onmouseleave = function () {
      this.innerText = this.abbreviation;
    };
  }
}
