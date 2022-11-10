

var compteur = 1;
var numberp = 65;
var taille = 0;
var path = "blanc/";
document.getElementById("punit").innerText = numberp + " €";
document.getElementById("prixtot").innerText = numberp * compteur + " €";
document.getElementById("counting").innerText = compteur;

document.getElementById("punit2").innerText = numberp + " €";
document.getElementById("prixtot2").innerText = numberp * compteur + " €";

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
    document.getElementById("punit").innerText = numberp + " €";
    document.getElementById("prixtot").innerText = numberp * compteur + " €";

    document.getElementById("punit2").innerText = numberp + " €";
    document.getElementById("prixtot2").innerText = numberp * compteur + " €";
    
}
function moins() {
    if(compteur <= 1){
        compteur = 1;
        document.getElementById("numberp").innerText = numberp * compteur;
        document.getElementById("punit").innerText = numberp + " €";
        document.getElementById("prixtot").innerText = numberp * compteur + " €";

        document.getElementById("punit2").innerText = numberp + " €";
        document.getElementById("prixtot2").innerText = numberp * compteur + " €";
    }
    else{
        compteur = compteur - 1;
        document.getElementById("counting").innerText = compteur;
        document.getElementById("numberp").innerText = numberp * compteur;
        document.getElementById("punit").innerText = numberp + " €";
        document.getElementById("prixtot").innerText = numberp * compteur + " €";

        document.getElementById("punit2").innerText = numberp + " €";
        document.getElementById("prixtot2").innerText = numberp * compteur + " €";
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

var x = document.getElementById("0").style.backgroundImage;
var z = document.getElementById("imgrecap");
var y = 1;


function img(){
    switch (y) {
        case 1 : document.getElementById("0").style.backgroundImage= "url(image/"+path+"Backpack-back.png)";
            z.src = "image/"+path+"Backpack-back.png";
            break;
        case 2 : x = document.getElementById("0").style.backgroundImage= "url(image/"+path+"Backpack-front.png)";
            z.src = "image/"+path+"Backpack-front.png";
            break;
        case 3 : document.getElementById("0").style.backgroundImage= "url(image/"+path+"Backpack-porter.png)";
                z.src = "image/"+path+"Backpack-porter.png";
            break;
    }
    document.getElementById("1").src = "image/"+path+"Backpack-back.png";
    document.getElementById("2").src = "image/"+path+"Backpack-front.png";
    document.getElementById("3").src = "image/"+path+"Backpack-porter.png";


}

function selectedd(){
    taille = Number(document.getElementById('select').value);
    var select = document.getElementById('select'),
    selectValue = select.options[taille].text;
    console.log(selectValue);
    document.getElementById("recaptaille").innerText = selectValue;
    document.getElementById("recaptaille2").innerText = selectValue;
    switch (taille) {
        case 0 : numberp = 65;
                path = "blanc/";
                break;
        case 1 : numberp = 65;
                path = "blanc/";
            break;
        case 2 : numberp = 60; 
                path = "noir/";
            break;
        case 3 : numberp = 55;
        path = "rouge/";
            break;
        case 4 : numberp = 55;
        path = "vert/";
            break;
    }
    document.getElementById("numberp").innerText = numberp * compteur;
    plus();
    moins();
    if (taille!= 0){
        img2();
    }
    
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

