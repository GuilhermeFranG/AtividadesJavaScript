const textArea = document.getElementById('textArea');

var count = document.getElementById("counter");

function contarPalavras() {
    let contagem = textArea.value.trim().split(/\s+/); 
    let palavra = textArea.value.trim() === "" ? 0 : contagem.length; 
    let letra = textArea.value.length;

    resultado = `${letra} letra(s) e ${palavra} palavra(s)`;

    if (palavra === 0 && letra === 0){
        count.style.display = "none";
    } else {
        count.style.display = "block";
    }

    count.innerText = resultado;
}


// (/\s+/) Espaços em branco, uma ou mais vezes
// .trim() Remove os espacos em branco no início e fim da string
// split() Transforma a string num array separando por um determinado valor (neste caso o espaço em branco)
// ? e : funcionam como if e else. Ex.: (condição) ? true : false