

var compteur = 0;
document.getElementById("counting").innerText = compteur;
function plus() {
    compteur = compteur + 1;
    document.getElementById("counting").innerText = compteur;
}
function moins() {
    if(compteur <= 0){
        compteur = 0;
    }
    else{
        compteur = compteur - 1;
        document.getElementById("counting").innerText = compteur;
    }
}

function buy() {
    $('.buypop').addClass('visible');
    $('.buypop2').addClass('visible');
}

var x = document.getElementById("0");
var y = 1;



function img(){
    switch (y) {
        case 1 : x.setAttribute("src", "image/cube1.jpg");
            break;
        case 2 : x.setAttribute("src", "image/cube2.jpg");
            break;
        case 3 : x.setAttribute("src", "image/cube3.jpg");
            break;
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


