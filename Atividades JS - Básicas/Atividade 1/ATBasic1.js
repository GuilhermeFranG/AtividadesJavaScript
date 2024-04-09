let isClicked = false

function showInfo() {
    let nome = "Guilherme Francisco Guth";
    let idade = 17;
    let instituto = "Instituto Evoluir";
    let code = "Html, Css e JavaScript";

    const body = document.body;
    var info = document.getElementById("info");
    var content = document.getElementById('content');

    if (!isClicked) {
        info.innerHTML = "Olá, meu nome é " + nome + "  e tenho " + idade +
            " anos de idade.";
        info.style.display = "block";
        content.innerHTML = "Estou estudando programação com o " + instituto + ", e atualmente estudo as linguagens "
            + code + ".";
        content.style.display = "block";
        body.style.backgroundColor = '#33337e';
    } else {
        info.style.display = "none";
        content.style.display = "none";
        body.style.backgroundColor = '';
    }

    isClicked = !isClicked;
}