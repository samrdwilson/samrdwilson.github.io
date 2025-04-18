//function new_character () {
//}
//function new_scene_and_shot () {
//}
//function new_log_past_version () {
//}
//function new_action () {
//}
//function new_dialouge () {
//}
//function new_general () {
//}



function backspace() {
        let paper =  document.getElementById("paper");
        let length = paper.innerHTML.length;
        paper.innerHTML = paper.innerHTML.substr(0, length-1);
}


function q() {
        document.getElementById("paper").innerHTML += "q";
}

function w() {
        document.getElementById("paper").innerHTML += "w";
}

function e() {
        document.getElementById("paper").innerHTML += "e";
}

function r() {
        document.getElementById("paper").innerHTML += "r";
}


function t() {
        document.getElementById("paper").innerHTML += "t";
}

function y() {
        document.getElementById("paper").innerHTML += "y";
}

function u() {
        document.getElementById("paper").innerHTML += "u";
}

function i() {
        document.getElementById("paper").innerHTML += "i";
}

function o() {
        document.getElementById("paper").innerHTML += "o";
}

function p() {
        document.getElementById("paper").innerHTML += "p";
}




function a() {
        document.getElementById("paper").innerHTML += "a";
}

function s() {
        document.getElementById("paper").innerHTML += "s";
}

function d() {
        document.getElementById("paper").innerHTML += "d";
}

function f() {
        document.getElementById("paper").innerHTML += "f";
}

function g() {
        document.getElementById("paper").innerHTML += "g";
}

function h() {
        document.getElementById("paper").innerHTML += "h";
}

function j() {
        document.getElementById("paper").innerHTML += "j";
}

function k() {
        document.getElementById("paper").innerHTML += "k";
}

function l() {
        document.getElementById("paper").innerHTML += "l";
}



function z() {
        document.getElementById("paper").innerHTML += "z";
}

function x() {
        document.getElementById("paper").innerHTML += "x";
}

function c() {
        document.getElementById("paper").innerHTML += "c";
}

function v() {
        document.getElementById("paper").innerHTML += "v";
}

function b() {
        document.getElementById("paper").innerHTML += "b";
}

function n() {
        document.getElementById("paper").innerHTML += "n";
}

function m() {
        document.getElementById("paper").innerHTML += "m";
}



document.addEventListener('keydown', function(event) {
let paper = document.getElementById("paper");
if (event.key.length == 1) {
  paper.innerHTML += event.key;
}
else if ( event.key == "Enter" ) {
  paper.innerHTML += "<br>";
}
else if ( event.key == "Backspace" ) {
 let paper =  document.getElementById("paper");
        let length = paper.innerHTML.length;
        paper.innerHTML = paper.innerHTML.substr(0, length-1);
}

});


