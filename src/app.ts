function setBackground () {
    const background: any = document.getElementById("background")
    if (background.style.background == "white") {
        background!.style.background="grey"
    } else {
        background.style.background="white"
    }
}

function setTitle () {
    const titleColor: any = document.getElementById("game_title")
    if (titleColor.style.color == "green") {
        titleColor.innerText = "blue"
    }   else {
        titleColor.style.color="green"
    }
}