document.addEventListener("DOMContentLoaded", function () {
    var image = document.getElementById("imagem");
    var topPosition = 200;
    var leftPosition = 200;

    document.addEventListener("keydown", function (event) {
        var key = event.key

        switch (key) {
            case "ArrowUp":
                topPosition -= 10;
                break;
            case "ArrowDown":
                topPosition += 10;
                break;
            case "ArrowLeft":
                leftPosition -= 10;
                break;
            case "ArrowRight":
                leftPosition += 10;
                break;
        }

        image.style.top = topPosition + "px";
        image.style.left = leftPosition + "px";
    })
})


let isClicked = false;

function padrao() {
    var image = document.getElementById("imagem");
    if (!isClicked) {
        image.style.borderRadius = "4px";
        image.style.background = "none";
    }

    isClicked = !isClicked;
}

let isShaped = false;

function circulo() {
    var image = document.getElementById("imagem");
    if (!isShaped) {
        image.style.borderRadius = "999px";
    } else {
        image.style.borderRadius = "4px";
    }

    isShaped = !isShaped;
}

let isColored = false;

function cheio() {
    var image = document.getElementById("imagem");
    if (!isColored) {
        image.style.backgroundColor = "#ff63f2";
    } else {
        image.style.background = "none";
    }

    isColored = !isColored;
}


function vezes2() {
    var image = document.getElementById("imagem");
    var topPosition = 200;
    var leftPosition = 200;

    document.addEventListener("keydown", function (event) {
        var key = event.key

        switch (key) {
            case "ArrowUp":
                topPosition -= 50;
                break;
            case "ArrowDown":
                topPosition += 50;
                break;
            case "ArrowLeft":
                leftPosition -= 50;
                break;
            case "ArrowRight":
                leftPosition += 50;
                break;
        }

        image.style.top = topPosition + "px";
        image.style.left = leftPosition + "px";
    })
}