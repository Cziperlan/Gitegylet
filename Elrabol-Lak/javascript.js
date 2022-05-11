var tábla = [];
tábla[1]="9.L; Erősáram; Autólopás ; Erősáram; Flexelés";
tábla[2]="10.L; Flexelés; Autólopás; Áramhálózat; Matek ";
tábla[3]="11.L;";
tábla[4]="12.L;";

function listaelem(teljesenmásdolog){
    if (teljesenmásdolog.includes("asd")) {
        return "<b>"+teljesenmásdolog.replace(",","<br>")+"</b>";
    }
    else
    {
        return teljesenmásdolog.replace(",","<br>");
    }
}

function őrarend(){
    var elem = document.getElementById("tábla").value;
    document.getElementById("osztály").innerHTML = listaelem(tábla[elem].split(";")[0]);
}

function panelek(db){
    const panelek=document.getElementById('panelek');
    panelek.innerHTML="";
    for (i = 0; i < db; i++) {
        panelek.innerHTML += "<img src=''>"; 
    }
    panelek.innerHTML += "("+db+" db)";
    document.getElementById('osszteljesitmeny').value = db * 275;
    document.getElementById('tetofelulet').value = db * 3.5
}

var elements = document.getElementsByClassName("column");

var i;

function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  
    elements[i].style.flex = "100%";
  }
}

function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  
    elements[i].style.flex = "50%";
  }
}

function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  
    elements[i].style.flex = "25%";
  }
}

var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

