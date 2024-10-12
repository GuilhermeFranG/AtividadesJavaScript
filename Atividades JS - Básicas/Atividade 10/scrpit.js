var c = "°C";
var f = "°F";
var k = "K";

var select1 = document.getElementById("tipoTemp1");
var select2 = document.getElementById("tipoTemp2");

var previousSelect1Value = select1.value; // Variáveis para armazenar o valor anterior dos selects //
var previousSelect2Value = select2.value;

select1.addEventListener('change', function () {
    if (select1.value === select2.value) {
        select1.value = previousSelect2Value; // Altera select1 para o valor antigo de select2
    }
    previousSelect2Value = select2.value; // Atualiza o valor anterior
    console.log(select1.value);
});
select2.addEventListener('change', function () {
    if (select1.value === select2.value) {
        select1.value = previousSelect2Value; // Se for igual, ajusta select1 para o valor anterior de select2
    }
    previousSelect2Value = select2.value; // Armazena o novo valor de select2
    console.log(select2.value);
});

select1.addEventListener('change', function () {
    if (select2.value === select1.value) {
        select2.value = previousSelect1Value; // Altera select1 para o valor antigo de select2
    }
    previousSelect1Value = select1.value; // Atualiza o valor anterior
    console.log(select1.value);
});
select2.addEventListener('change', function () {
    if (select2.value === select1.value) {
        select2.value = previousSelect1Value; // Se for igual, ajusta select2 para o valor anterior de select1
    }
    previousSelect1Value = select1.value; // Armazena o novo valor de select1
    console.log(select2.value);
});


var conversor = document.getElementById("conversor");

function calcularTemp() {
    if (select1.value === "Celsius" && select2.value === "Fahrenheit") {
        let temp1 = document.getElementById("temp1").value;
        let temp2 = document.getElementById("temp2").value = (temp1 * 9 / 5) + 32;
        console.log(`${temp1} ${c} 
${temp2} ${f}`);
        console.log(`Conversão: (${c} * 9 / 5) + 32`);
        conversor.innerHTML = `<strong>Conversão:</strong> (${temp1} ${c} * 9 / 5) + 32 = ${temp2} ${f}`;
    } else if (select1.value === "Fahrenheit" && select2.value === "Celsius") {
        let temp1 = document.getElementById("temp1").value;
        let temp2 = document.getElementById("temp2").value = ((temp1 - 32) * 5 / 9).toFixed(2);
        console.log(`${temp1} ${f}  
${temp2} ${c}`);
        console.log(`Conversão: (${f} - 32) *  5 / 9`);
        conversor.innerHTML = `<strong>Conversão:</strong> (${temp1} ${f} - 32) *  5 / 9 = ${temp2} ${c}`;
    } else if (select1.value === "Celsius" && select2.value === "Kelvin") {
        let temp1 = document.getElementById("temp1").value;
        let temp2 = document.getElementById("temp2").value = ((temp1 * 1) + 273.15).toFixed(2);
        console.log(`${temp1} ${c}  
${temp2} ${k}`);
        console.log(`Conversão: ${c} + 273,15`);
        conversor.innerHTML = `<strong>Conversão:</strong> ${temp1} ${c} + 273,15 = ${temp2} ${k}`;
    } else if (select1.value === "Kelvin" && select2.value === "Celsius") {
        let temp1 = document.getElementById("temp1").value;
        let temp2 = document.getElementById("temp2").value = (temp1 - 273.15).toFixed(2);
        console.log(`${temp1} ${k}    
${temp2} ${c}`);
        console.log(`Conversão: ${k} - 273,15`);
        conversor.innerHTML = `<strong>Conversão:</strong> ${temp1} ${k} - 273,15 = ${temp2} ${c}`;
    } else if (select1.value === "Fahrenheit" && select2.value === "Kelvin") {
        let temp1 = document.getElementById("temp1").value;
        let temp2 = document.getElementById("temp2").value = ((temp1 - 32) * 5 / 9 + 273.15).toFixed(2);
        console.log(`${temp1} ${f}    
${temp2} ${k}`);
        console.log(`Conversão: (${f} - 32) * 5/9 + 273,15`);
        conversor.innerHTML = `<strong>Conversão:</strong> (${temp1} ${f} - 32) * 5/9 + 273,15 = ${temp2} ${k}`;
    } else if (select1.value === "Kelvin" && select2.value === "Fahrenheit") {
        let temp1 = document.getElementById("temp1").value;
        let temp2 = document.getElementById("temp2").value = ((temp1 - 273.15) * 9 / 5 + 32).toFixed(2);
        console.log(`${temp1} ${k}    
${temp2} ${f}`);
        console.log(`Conversão: (${k} - 273,15) * 9/5 + 32`);
        conversor.innerHTML = `<strong>Conversão:</strong> (${temp1} ${k} - 273,15) * 9/5 + 32 = ${temp2} ${f}`;
    }
}

var theme = document.getElementById("theme");
let isClicked = false;

function changeTheme() {
    if (!isClicked) {
        theme.style.backgroundColor = "#000";
        theme.style.color = "#fff";
        theme.style.border = "1px solid #fff";
        theme.innerHTML = "Tema &#9728;";
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff";
    } else {
        theme.style.backgroundColor = "";
        theme.style.color = "";
        theme.style.border = "";
        theme.innerHTML = "Tema &#9790;";
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
    }

    isClicked = !isClicked;
}