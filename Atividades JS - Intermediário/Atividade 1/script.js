function imc() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var result = peso / (altura * altura);
    if (isNaN(result)) {
        alert('Por favor, insira um valor numérico para Peso e Altura!');
    } else {
        document.getElementById("result").innerHTML = `${result.toFixed(2)} Kg/m<sup>2</sup>`;
        // toFixed: define a quantidade de casas decimais
    }
}   