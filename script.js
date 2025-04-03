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


function new_page (div) {
}
function new_character () {
}
function new_shot () {
}
function new_log_past_version () {
}
function new_scene_setting () {
}
function new_action () {
}
function new_paranthetical () {
}
function new_dialouge () {
}
function new_transition () {
}
function new_general () {
}
