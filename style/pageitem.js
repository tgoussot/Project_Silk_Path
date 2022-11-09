

var compteur = 1;
var numberp = 10;
var taille = 0;
document.getElementById("punit").innerText = numberp + "€";
document.getElementById("prixtot").innerText = numberp * compteur + "€";
document.getElementById("counting").innerText = compteur;

document.getElementById("punit2").innerText = numberp + "€";
document.getElementById("prixtot2").innerText = numberp * compteur + "€";

var select = document.getElementById('select'),
    selectValue = select.options[0].text;
document.getElementById("recaptaille").innerText = selectValue;

var select = document.getElementById('select'),
    selectValue = select.options[0].text;
document.getElementById("recaptaille2").innerText = selectValue;


function plus() {
    compteur = compteur + 1;
    document.getElementById("counting").innerText = compteur;
    document.getElementById("numberp").innerText = numberp * compteur;
    document.getElementById("punit").innerText = numberp + "€";
    document.getElementById("prixtot").innerText = numberp * compteur + "€";

    document.getElementById("punit2").innerText = numberp + "€";
    document.getElementById("prixtot2").innerText = numberp * compteur + "€";
    
}
function moins() {
    if(compteur <= 1){
        compteur = 1;
        document.getElementById("numberp").innerText = numberp * compteur;
        document.getElementById("punit").innerText = numberp + "€";
        document.getElementById("prixtot").innerText = numberp * compteur + "€";

        document.getElementById("punit2").innerText = numberp + "€";
        document.getElementById("prixtot2").innerText = numberp * compteur + "€";
    }
    else{
        compteur = compteur - 1;
        document.getElementById("counting").innerText = compteur;
        document.getElementById("numberp").innerText = numberp * compteur;
        document.getElementById("punit").innerText = numberp + "€";
        document.getElementById("prixtot").innerText = numberp * compteur + "€";

        document.getElementById("punit2").innerText = numberp + "€";
        document.getElementById("prixtot2").innerText = numberp * compteur + "€";
    }
}


var elem = document.getElementById( 'buypop' );
var elem2 = document.getElementById( 'achatpop' );


function buy(){
    elem.classList.add('visible');
};

function achat(){
    elem2.classList.add('visible');
};


function removebuy(){
    elem.classList.remove('visible');
}

function removeachat(){
    elem2.classList.remove('visible');
}




var x = document.getElementById("0");
var z = document.getElementsByClassName("imgrecap");
var y = 1;



function img(){
    switch (y) {
        case 1 : x.setAttribute("src", "image/test1.png");
            z.setAttribute("src", "image/test1.png");
            break;
        case 2 : x.setAttribute("src", "image/test2.png");
            z.setAttribute("src", "image/test2.png");
            break;
        case 3 : x.setAttribute("src", "image/test3.png");
                z.setAttribute("src", "image/test3.png");
            break;
    }
}
function selectedd(){
    taille = Number(document.getElementById('select').value);
    var select = document.getElementById('select'),
    selectValue = select.options[taille].text;
    console.log(selectValue);
    document.getElementById("recaptaille").innerText = selectValue;
    document.getElementById("recaptaille2").innerText = selectValue;
    switch (taille) {
        case 1 : numberp = 10; 
            break;
        case 2 : numberp = 20; 
            break;
        case 3 : numberp = 30;
            break;
        case 4 : numberp = 40;
            break;
        case 5 : numberp = 50;
            break;
    }
    document.getElementById("numberp").innerText = numberp * compteur;
    plus();
    moins();
}


function next(){
    if(y>= 3){
        y= 1;
        img();
    }
    else{
        y++;
        img();
    }
}

function img1(){
    y = 1;
    img();
}

function img2(){
    y= 2;
    img();
}

function img3(){
    y= 3;
    img();
}

