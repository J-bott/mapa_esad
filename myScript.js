const btn = document.getElementById("seta");
const menu = document.getElementById("menu");
const vetores = document.getElementsByClassName("vetor");
const closeVector = document.getElementById("close-vector");

btn.onclick = function () {
  //levanta ou desce menu flutuante

  if (menu.className == "open") {
    menu.className = "closed";
  } else {
    menu.className = "open";
  }
}

closeVector.onclick = function () {
  //botao esc (reabilita menu flutuante, fecha todos caminhos);

    menu.style.display = "flex";
    btn.onclick();
    closeVector.style.display = "none";
    for (i = 0; i < vetores.length; i++) {
        vetores[i].style.display = "none";
    }
}


function disableMenu() {
  //fecha menu flutuante, abre botao esc;

  menu.style.display = "none";
  closeVector.style.display = "block";
}

function VecCantina() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-cantina");
  x.style.display = "block";
  x.style.animation = "dash 2s linear forwards";
  disableMenu();
}

function VecPapelaria() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-papelaria");
  x.style.display = "block";
  x.style.animation = "dash 2s linear forwards";
  disableMenu();
}

function VecInformatica() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-informatica");
  x.style.display = "block";
  x.style.animation = "dash 2s linear forwards";
  disableMenu();
}

function VecGaleria() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-galeria");
  x.style.display = "block";
  x.style.animation = "dash 2s linear forwards";
  disableMenu();
}

function VecRecepcao() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-recepcao");
  x.style.display = "block";
  x.style.animation = "dash 2s linear forwards";
  disableMenu();
}

function VecAuditorio() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-auditorio");
  x.style.display = "block";
  x.style.animation = "dash 2s linear forwards";
  disableMenu();
}


