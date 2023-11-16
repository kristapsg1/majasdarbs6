//import $ from 'jquery';
//import sum from './utils/sum/sum';
// sakuma vertiba colorChange ir false 
//un ar 'function changeColor()' mes parbaudam ja colorChange ir true mes nomainisim krasu uz citu
var colorChanged = false;
// Define a function to change the color of the button
function changeColor() {
    // document.getElemetById nozime ka mes elementam tiksim klat ar ID palidzibu,
    //un ar as HTMLButtonElement; mes pasakam to ka tas bus button html elements(visus elementus var atrast ar HTML....)
    var buttonViens = document.getElementById('poga-viens');
    // Parbauda vai buttonViens existe 
    if (buttonViens) {
        // Parbuada vai colorChanged = true ja ir tad samainit colorChanged = false
        if (colorChanged) {
            // ja krasa bija true (#ffff00) tad samainit atpakal uz false ('#017187')
            buttonViens.style.backgroundColor = '#017187';
        }
        else {
            // un otradi
            buttonViens.style.backgroundColor = '#ffff00';
        }
        // sis maina colorChanged no true uz false
        colorChanged = !colorChanged;
    }
}
//DOM = Dokumenta objektu modelis (JavaScript tiek izmantots, lai manipulētu ar DOM) ļaujot izstrādātājiem dinamiski atjaunināt tīmekļa lapas saturu, struktūru un stilu, 
//reaģējot uz lietotāja mijiedarbību vai citiem notikumiem.
//Notikumi (Events): DOM ļauj izstrādātājiem klausīties un reaģēt uz notikumiem, piemēram, lietotāja klikšķiem vai tastatūras ievadi.
//Document: Norāda uz tīmekļa lapu vai HTML dokumentu.
//Object: Pārstāv individuālas dokumenta daļas, piemēram, elementus, atribūtus un tekstu.
//Model: Apraksta to, kā šie objekti ir strukturēti un kā ar tiem var manipulēt.
// Pieskir event specifiskai lietai
document.addEventListener('DOMContentLoaded', function () {
    // uztaisa konstantu elementam ar 'poga-viens' ID
    var buttonViens = document.getElementById('poga-viens');
    // parbauda vai existe buttonViens
    if (buttonViens) {
        // pieskir click funkciju (changeColor) 'click' vieta var ielikt
        buttonViens.addEventListener('click', changeColor);
    }
});
//Poga 2 samainam textu, logika pa lielam tada ka poga 1, tikai izmantojam TEXTCONTENT
var textChangeButton = true;
function textChangeFunct() {
    var buttonDivi = document.getElementById("poga-divi");
    if (buttonDivi) {
        if (textChangeButton) {
            buttonDivi.textContent = 'SUCCESS';
        }
        else {
            buttonDivi.textContent = 'Button 2';
        }
    }
    textChangeButton = !textChangeButton;
}
document.addEventListener('DOMContentLoaded', function () {
    var buttonDivi = document.getElementById("poga-divi");
    if (buttonDivi) {
        buttonDivi.addEventListener('click', textChangeFunct);
    }
});
//Poga 3 neredzama poga, izmantojam opacity
var buttonInvisible = true;
function makeButtonInvisible() {
    var buttonTris = document.getElementById('poga-tris');
    if (buttonInvisible) {
        buttonTris.style.opacity = '0'; //Opacity izgaisina elementu. iet no 0-1. Un var uztaisit ari to ar komatiem piemeram 0.5
    }
    buttonInvisible = !buttonInvisible;
}
document.addEventListener('DOMContentLoaded', function () {
    var buttonTris = document.getElementById("poga-tris");
    if (buttonTris) {
        buttonTris.addEventListener('click', makeButtonInvisible);
    }
});
//Poga 4 kad uzkliskinam poga pazud un kad uzklikskinam velreiz poga paradas
var buttonVisbleOr = false;
function makeButtonInvisibleOr() {
    var buttonCetri = document.getElementById('poga-cetri');
    if (buttonCetri) {
        if (buttonVisbleOr) {
            buttonCetri.style.background = '#01870E';
        }
        else {
            buttonCetri.style.background = 'white';
        }
    }
    buttonVisbleOr = !buttonVisbleOr;
}
document.addEventListener('DOMContentLoaded', function () {
    var buttonCetri = document.getElementById("poga-cetri");
    if (buttonCetri) {
        buttonCetri.addEventListener('click', makeButtonInvisibleOr);
    }
});
//Poga 5
var randomColorButton = true; //sanak ka pirmais klikskis ir okey lai samainitu krasu, pec tam man vajag dubultot klisksus!
function randomBackground() {
    var buttonPieci = document.getElementById('poga-pieci');
    var fiveRandomColor = ['#ff5733', '#33ff57', '#5733ff', '#ff3357', '#57ff33']; //uztaisiju array kuru turu 5 random krasas
    var randomIndex = Math.floor(Math.random() * fiveRandomColor.length); //panem Indexu no arraya
    var randomColor = fiveRandomColor[randomIndex]; // un random array indexa ciparu ieliekam lai vins izcel vienu no krasam
    if (randomColorButton) {
        buttonPieci.style.background = randomColor; // seit mes ieliekam to random krasu
    }
    randomColorButton = !randomColorButton;
}
document.addEventListener('DOMContentLoaded', function () {
    var buttonPieci = document.getElementById('poga-pieci');
    if (buttonPieci) {
        buttonPieci.addEventListener('click', randomBackground);
    }
});
//Poga 6
var presePlusOne = true;
function preseToPlus() {
    var numberZeroPlus = document.getElementById('kvadrats-sesi');
    var getZeroAsNumber = parseInt(numberZeroPlus.textContent || '0', 10); //parveidos par stringu par integer un ar or elementu pateiksu ja strings nav parveidojams(piem.Kristaps) vins bus 0
    var i = getZeroAsNumber; //i = 0, jo getZeroAsNumber ir 0
    var interval; //so mes izmantojam lai ietu timeris???
    if (presePlusOne) {
        interval = setInterval(function () {
            console.log(i); //sis izprinte tagadejo i vertibu, sis iet ka loops
            numberZeroPlus.textContent = i.toString(); //sis updeito pasa majaslapa i, lai var fiziski redzet ka mainas cipari
            if (i === 10) { //kad i sasniedz konkreto vertibu
                presePlusOne = false;
                clearInterval(interval); //si funkcija apstadinas const interval = setInterval(() => {... so funkciju
            }
            i += 1;
        }, 3000); // timer ms. 3000ms = 3min
    }
    else {
        if (i === 10) { //sis reseto programmu, bet kad sasniedz 10 tad atkal ir jauzklikskina velreiz lai resetotu
            var i_1 = getZeroAsNumber;
            clearInterval(intervalId);
            intervalId = undefined;
        }
        numberZeroPlus.textContent = '0';
    }
    presePlusOne = !presePlusOne;
}
document.addEventListener('DOMContentLoaded', function () {
    var numberZeroPlus = document.getElementById('poga-sesi');
    if (numberZeroPlus) {
        numberZeroPlus.addEventListener('click', preseToPlus);
    }
});
//Poga 7
var backgroundChangeBool = true;
function backgroundChange() {
    var bodyBg = document.getElementById('body');
    var allSquares = document.querySelectorAll('.kavadrats'); //querySelectorAll panem visus elementus ar to pasu classi,ja izmanto querySelector vins panem pirmo elementu
    if (bodyBg && allSquares) {
        if (backgroundChangeBool) {
            bodyBg.style.backgroundColor = '#18D5E1';
            allSquares.forEach(function (square) {
                if (square instanceof HTMLElement) { //mes samainam as HTMLElement ar square elemntu
                    square.style.backgroundColor = '#000000';
                }
            });
        }
        else {
            bodyBg.style.backgroundColor = 'white';
            allSquares.forEach(function (square) {
                if (square instanceof HTMLElement) {
                    square.style.backgroundColor = '#1FC2AE';
                }
            });
        }
    }
    backgroundChangeBool = !backgroundChangeBool;
}
document.addEventListener('DOMContentLoaded', function () {
    var buttonSeptini = document.getElementById('poga-septini');
    if (buttonSeptini) {
        buttonSeptini.addEventListener('click', backgroundChange);
    }
});
//Kvadrats 1
var hoverSquareChange = true;
function hoverSquare() {
    var squareOne = document.getElementById("kvadrats-viens");
    if (squareOne) {
        if (hoverSquareChange) {
            squareOne.style.background = 'red';
        }
        else {
            squareOne.style.background = '#1FC2AE';
        }
    }
    hoverSquareChange = !hoverSquareChange;
}
document.addEventListener('DOMContentLoaded', function () {
    var squareOne = document.getElementById("kvadrats-viens");
    if (squareOne) {
        squareOne.addEventListener('mouseenter', hoverSquare); //mouseenter nozime to ka mes uzejam virsu uz elementa
        squareOne.addEventListener('mouseleave', hoverSquare); //mouseleave no ejam nost no elementa
    }
});
//Kvadrats 5
var hoverSquareCount = false;
var intervalId = null; //NodeJS.Timer ir lidzigs setInterval un setTimout
function hoverCount() {
    var squareNumber = document.getElementById('kvadrats-pieci-text');
    var getCount = parseInt(squareNumber.textContent || '0', 10);
    if (!hoverSquareCount) {
        if (intervalId !== null) {
            clearInterval(intervalId);
        }
        var i_2 = getCount;
        intervalId = setInterval(function () {
            console.log(i_2);
            squareNumber.textContent = i_2.toString();
            if (i_2 === 10) {
            }
            else {
                i_2 += 1;
            }
        }, 400);
    }
    else {
        if (intervalId !== null) { //sis parbauda ja intervalId nav vienads ar nulli tad viss resetojas
            clearInterval(intervalId);
            intervalId = null;
        }
        squareNumber.textContent = '0';
    }
    hoverSquareCount = !hoverSquareCount;
}
document.addEventListener('DOMContentLoaded', function () {
    var squareFive = document.getElementById("kvadrats-pieci");
    if (squareFive) {
        squareFive.addEventListener('mouseenter', hoverCount);
        squareFive.addEventListener('mouseleave', hoverCount);
    }
});
//Output Box
function updateInput() {
    var inputBox = document.getElementById('input-box');
    var outputBox = document.getElementById('output-div');
    if (inputBox && outputBox) {
        var inputValue = inputBox.value;
        outputBox.innerText = inputValue;
    }
}
window.updateInput = updateInput; //sito isti nesapratotu bet zinu ka window ir global object!
