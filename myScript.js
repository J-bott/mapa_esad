

const vetores = document.getElementsByClassName("vetor");
const closeVector = document.getElementById("close-vector");
const salas = document.getElementById("salas");
const menuLateral = document.getElementById("menu-lateral");
const btnPopMenu = document.getElementById("menu-pop");
const btnUnPopMenu = document.getElementById("menu-unpop");
const andar01 = document.getElementById("andar01");
const andar02 = document.getElementById("andar02");
const andar03 = document.getElementById("andar03");

function popMenu() {
  //levanta menu flutuante

  menuLateral.style.display = "block";
  btnPopMenu.style.display = "none";
  btnUnPopMenu.style.display = "block";
  btnUnPopMenu.style.transform = "rotate(180deg)";

}
function unPopMenu() {
  //desce menu flutuante

  menuLateral.style.display = "none";
  btnPopMenu.style.display = "block";
  btnUnPopMenu.style.display = "none";


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

function showAndar01(){
  // habilita svg de andar01, desabilita de andar02 e 03
  andar01.style.display = "block";
  andar02.style.display = "none";
  andar03.style.display = "none";
  andar01.style.opacity = "1";
}
function showAndar02(){
  // habilita svg de andar02, desabilita de andar01 e 03
  andar01.style.opacity = "0.5";
  andar02.style.display = "block";
  andar02.style.opacity = "1";
  andar03.style.display = "none";
}
function showAndar03(){
  // habilita svg de andar03, desabilita de andar02 e 01
  andar01.style.opacity = "0.2";
  andar02.style.display = "block";
  andar02.style.opacity = "0.7";
  andar03.style.display = "block";
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

    showAndar01();
    closeSalas();
    btnPopMenu.style.display = "block";
    btnUnPopMenu.style.display = "none";

    closeVector.style.display = "none";
    for (i = 0; i < vetores.length; i++) {
        vetores[i].style.animation = "none";
    }
}

function disableMenu() {
  //fecha menu flutuante, abre botao esc;
  menuLateral.style.display = "none";
  btnPopMenu.style.display = "none";
  btnUnPopMenu.style.display = "none";
  closeVector.style.display = "block";

}

function VecCantina() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vector_cantina");
  x.style.animation = "pulse 2s infinite linear forwards";
  disableMenu();
}

function VecPapelaria() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vector_papelaria");
  x.style.animation = "pulse 2s infinite linear forwards";
  disableMenu();
}

function VecInformatica() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vector_fotocopia");
  x.style.animation = "pulse 2s infinite linear forwards";
  disableMenu();
}

function VecGaleria() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vector_galeria");

  x.style.animation = "pulse 2s infinite linear forwards";
  disableMenu();
}

function VecRecepcao() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vector_recepcao");

  x.style.animation = "pulse 2s infinite linear forwards";
  disableMenu();
}

function VecAuditorio() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vector_auditorio");

  x.style.animation = "pulse 2s infinite linear forwards";
  disableMenu();
}

function VecMadeiras() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vector_madeira");

  x.style.animation = "pulse 2s infinite linear forwards";
  disableMenu();
}

function VecTipografia() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vector_tipografia");

  x.style.animation = "pulse 2s infinite linear forwards";
  disableMenu();
}
function VecFotografia() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vector_estudio");

  x.style.animation = "pulse 2s infinite linear forwards";
  disableMenu();
}
function VecBathroom() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("VecBathroom");

  x.style.animation = "pulse 2s infinite linear forwards";
  disableMenu();
}

function VecS001() {
    //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

    var x = document.getElementById("Vector_sala1");
  
    x.style.animation = "pulse 2s infinite linear forwards";
    disableMenu();
}
function VecS002() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vector_sala2");

  x.style.animation = "pulse 2s infinite linear forwards";
  disableMenu();
}
function VecS003() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vector_sala3");

  x.style.animation = "pulse 2s infinite linear forwards";
  disableMenu();
}
function VecS004() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vector_sala4");

  x.style.animation = "pulse 2s infinite linear forwards";
  disableMenu();
}

function VecBiblioteca() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-biblioteca");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecInvestigacao() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-investigacao");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecAcreditacao() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-acreditacao");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecBiblioteca() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-biblioteca");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecJoalharia() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-joalharia");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecSerigrafia() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-serigrafia");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}

function VecS101() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s101");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecS102() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s102");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecS103() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s103");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecS104() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s104");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecS105() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s105");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecS106() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s106");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecS107() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s107");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecS108() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s108");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecS109() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s109");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecS110() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s110");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecS112() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s112");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecS113() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s113");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecS114() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s114");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecS115() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s115");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecS116() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s116");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecS117() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s117");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecS118() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s118");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecS119() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s119");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecS120() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s120");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecS121() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s121");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecS122() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s122");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}
function VecS124() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s124");

  x.style.animation = "pulse 2s infinite linear forwards";
  showAndar02();
  disableMenu();  
}

function VecS201() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s201");

  x.style.animation = "pulse 2s infinite linear forwards";
  disableMenu();
  showAndar03();
}
function VecS202() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s202");

  x.style.animation = "pulse 2s infinite linear forwards";
  disableMenu();
  showAndar03();
}
function VecS203() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s203");

  x.style.animation = "pulse 2s infinite linear forwards";
  disableMenu();
  showAndar03();
}
function VecS204() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s204");

  x.style.animation = "pulse 2s infinite linear forwards";
  disableMenu();
  showAndar03();
}
function VecS205() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s205");

  x.style.animation = "pulse 2s infinite linear forwards";
  disableMenu();
  showAndar03();
}
function VecS206() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s206");

  x.style.animation = "pulse 2s infinite linear forwards";
  disableMenu();
  showAndar03();
}
function VecS207() {
  //abre caminho x, dispara animação, desabilita menu flutuante, abilita botao esc;

  var x = document.getElementById("Vec-s207");

  x.style.animation = "pulse 2s infinite linear forwards";
  disableMenu();
  showAndar03();
}