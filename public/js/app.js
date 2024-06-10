"use strict";
function setBackground() {
    var background = document.getElementById("background");
    if (background.style.background == "white") {
        background.style.background = "grey";
    }
    else {
        background.style.background = "white";
    }
}
function setTitle() {
    var titleColor = document.getElementById("game_title");
    if (titleColor.style.color == "green") {
        titleColor.innerText = "hi maruf";
    }
    else {
        titleColor.style.color = "green";
    }
}
