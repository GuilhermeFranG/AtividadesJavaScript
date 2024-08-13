function calcularMedia() {
    var valores = [];
    var soma = 0;

    do {
        var number = Number(prompt("Digite um número:"));
        valores.push(number);
        soma += number;

        var continuar = confirm("Continuar inserindo Valores?");
    } while (continuar);

    var media = soma / valores.length;

    var result = document.getElementById("result");
    result.classList.remove("hidden");
    result.innerHTML = `<p>A média dos valores é: 
    <strong>${Number.isInteger(media) ? media : media.toFixed(1)}</strong></p>
    <p class="resultText" style="color: #2929ad">Valores: ${valores.join(" + ")}</p>
    <p class="resultText" style="color: #b40000">Soma: ${soma}</p>`;

    // Number.isInteger(n) verifica se número é inteiro usando true e false
    // .join('caracterSeparador') adiciona uma array a uma string e separa ela pelo caracterSeparador
}