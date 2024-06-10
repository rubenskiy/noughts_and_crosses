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

let currentPlayer = "X"

function place(cell: any) {
    console.log("I have been clicked");
    if (cell.innerText == "") {
        if (currentPlayer == "X") {
            currentPlayer = "O"
         } else {
            currentPlayer = "X"
        }
        cell.innerText = currentPlayer
    } else {
        alert("invalid move")
    }
}