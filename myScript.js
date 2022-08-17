const btn = document.getElementById("seta");
const menu = document.getElementById("menu");
const vetores = document.getElementsByClassName("vetor");
const closeVector = document.getElementById("close-vector");
const salas = document.getElementById("salas");

btn.onclick = function () {
  //levanta ou desce menu flutuante

  if (menu.className == "open") {
    menu.className = "closed";
  } else {
    menu.className = "open";
  }
}

function openSalas() {
  //desabilita botoes do menu flutuante, abilita botoes de salas

  let btns = document.getElementsByClassName("btn");
  let btnSala = document.getElementsByClassName ("btn-sala");

  for(i=0; i < btns.length; i++) {
    btns[i].style.display = "none";
  }
  for(i=0; i < btnSala.length; i++) {
      btnSala[i].style.display = "block";
    }

}
function closeSalas() {
  //reverte openSalas() e openOficinas()

  let btns = document.getElementsByClassName("btn");
  let btnSala = document.getElementsByClassName ("btn-sala");
  let btnOficina = document.getElementsByClassName ("btn-oficina");

  for(i=0; i < btns.length; i++) {
    btns[i].style.display = "block";
  }
  for(i=0; i < btnSala.length; i++) {
      btnSala[i].style.display = "none";
    }
    for(i=0; i < btnOficina.length; i++) {
      btnOficina[i].style.display = "none";
    }


}

function openOficinas(){
  //desabilita botoes do menu flutuante, abilita botoes da oficina

  let btns = document.getElementsByClassName("btn");
  let btnOficina = document.getElementsByClassName ("btn-oficina");

  for(i=0; i < btns.length; i++) {
    btns[i].style.display = "none";
  }
  for(i=0; i < btnOficina.length; i++) {
      btnOficina[i].style.display = "block";
    }

}
closeVector.onclick = function () {
  //botao esc (reabilita menu flutuante, fecha todos caminhos);

    menu.style.display = "flex";
    btn.onclick();
    closeSalas();
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

function VecMadeiras() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-madeiras");
  x.style.display = "block";
  x.style.animation = "dash 2s linear forwards";
  disableMenu();
}

function VecTipografia() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-tipografia");
  x.style.display = "block";
  x.style.animation = "dash 2s linear forwards";
  disableMenu();
}
function VecFotografia() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-fotografia");
  x.style.display = "block";
  x.style.animation = "dash 2s linear forwards";
  disableMenu();
}

