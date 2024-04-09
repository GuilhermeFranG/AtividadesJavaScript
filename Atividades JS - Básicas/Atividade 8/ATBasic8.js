const textBtn = document.getElementById("textBtn");
const imgBtn = document.getElementById("imgBtn");
const shyEmoji = document.getElementById("shyEmoji");
const noBtn = document.getElementById("noBtn");
var headText = document.getElementById("headerText");
var footer = document.getElementById("footer");

function showText() {
    var buttons = document.querySelectorAll(".buttons");

    buttons.forEach(button => {
        if (!isChanged) {
            textBtn.textContent = "Bem Vindo! Esse é o botão de boas vindas";
            textBtn.style.backgroundColor = "greenyellow";
            textBtn.style.border = "2px solid green";
            textBtn.style.borderRadius = "8px";
            textBtn.style.width = "25vw";
            textBtn.style.fontSize = "17px";
            textBtn.style.fontWeight = "bolder";
            textBtn.style.textShadow = "1px 1px 1px lime";
        } else {
            textBtn.textContent = "Mostrar Texto";
            textBtn.style.backgroundColor = "";
            textBtn.style.border = "";
            textBtn.style.borderRadius = "";
            textBtn.style.width = "10vw";
            textBtn.style.fontSize = "";
            textBtn.style.fontWeight = "";
            textBtn.style.textShadow = "";
        }
    })
    isChanged = !isChanged;
}

function showImg() {
    var buttons = document.querySelectorAll(".buttons");

    buttons.forEach(button => {
        if (!isShowed) {
            shyEmoji.classList.remove(["hidden"]);
            imgBtn.innerHTML = "👉////👈";
        } else {
            shyEmoji.classList.add(["hidden"]);
            imgBtn.innerHTML = "Mostrar Imagem";
        }
    })
    isShowed = !isShowed;
}

function showNoMore() {
    var buttons = document.querySelectorAll(".buttons");

    buttons.forEach(button => {
        noBtn.classList.add(["hidden"]);
        headText.innerHTML = "☠";
        footer.classList.add(["hidden"]);
        textBtn.classList.add(["hidden"]);
        imgBtn.classList.add(["hidden"]);
        shyEmoji.classList.add(["hidden"]);
    })
    isClicked = !isClicked;
}

let isChanged = false;
let isShowed = false;
let isClicked = false;