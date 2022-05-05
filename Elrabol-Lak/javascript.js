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
