var c = "°C";
var f = "°F";
var k = "K";

var select1 = document.getElementById("tipoTemp1");
var select2 = document.getElementById("tipoTemp2");
select1.addEventListener('change', function () {
    console.log(select1.value);
});

select2.addEventListener('change', function () {
    console.log(select2.value);
});

var conversor = document.getElementById("conversor");


function calcularTemp() {
    if (select1.value === "Celsius" && select2.value === "Fahrenheit") {
        let temp1 = document.getElementById("temp1").value;
        let temp2 = document.getElementById("temp2").value = (temp1 * 9 / 5) + 32;
        console.log(`${temp1} ${c} 
${temp2} ${f}`);
        console.log(`Conversão: (°C * 9 / 5) + 32`);
        conversor.innerHTML = `<strong>Conversão:</strong> (${temp1} °C * 9 / 5) + 32 = ${temp2} °F`;
    } else if (select1.value === "Fahrenheit" && select2.value === "Celsius") {
        let temp1 = document.getElementById("temp1").value;
        let temp2 = document.getElementById("temp2").value = ((temp1 - 32) * 5 / 9).toFixed(2);
        console.log(`${temp1} ${f}  
${temp2} ${c}`);
        console.log(`Conversão: (°F - 32) *  5 / 9`);
        conversor.innerHTML = `<strong>Conversão:</strong> (${temp1} °F - 32) *  5 / 9 = ${temp2} °C`;
    } else if (select1.value === "Celsius" && select2.value === "Kelvin") {
        let temp1 = document.getElementById("temp1").value;
        let temp2 = document.getElementById("temp2").value = ((temp1 * 1) + 273.15).toFixed(2);
        console.log(`${temp1} ${c}  
${temp2} ${k}`);
        console.log(`Conversão: °C + 273,15`);
        conversor.innerHTML = `<strong>Conversão:</strong> ${temp1} °C + 273,15 = ${temp2} K`;
    } else if (select1.value === "Kelvin" && select2.value === "Celsius") {
        let temp1 = document.getElementById("temp1").value;
        let temp2 = document.getElementById("temp2").value = (temp1 - 273.15).toFixed(2);
        console.log(`${temp1} ${k}    
${temp2} ${c}`);
        console.log(`Conversão: K - 273,15`);
        conversor.innerHTML = `<strong>Conversão:</strong> ${temp1} K - 273,15 = ${temp2} °C`;
    } else if (select1.value === "Fahrenheit" && select2.value === "Kelvin") {
        let temp1 = document.getElementById("temp1").value;
        let temp2 = document.getElementById("temp2").value = ((temp1 - 32) * 5 / 9 + 273.15).toFixed(2);
        console.log(`${temp1} ${f}    
${temp2} ${k}`);
        console.log(`Conversão: (°F - 32) * 5/9 + 273,15`);
        conversor.innerHTML = `<strong>Conversão:</strong> (${temp1} °F - 32) * 5/9 + 273,15 = ${temp2} K`;
    } else if (select1.value === "Kelvin" && select2.value === "Fahrenheit") {
        let temp1 = document.getElementById("temp1").value;
        let temp2 = document.getElementById("temp2").value = ((temp1 - 273.15) * 9 / 5 + 32).toFixed(2);
        console.log(`${temp1} ${k}    
${temp2} ${f}`);
        console.log(`Conversão: (K - 273,15) * 9/5 + 32`);
        conversor.innerHTML = `<strong>Conversão:</strong> (${temp1} K - 273,15) * 9/5 + 32 = ${temp2} °F`;
    }
}

var theme = document.getElementById("theme");
let isClicked = false;

function changeTheme() {
    if (!isClicked) {
        theme.style.backgroundColor = "#000";
        theme.style.color = "#fff";
        theme.style.border = "1px solid #fff"
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff";
    } else {
        theme.style.backgroundColor = "#fff";
        theme.style.color = "#000";
        theme.style.border = "1px solid #000"
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
    }

    isClicked = !isClicked;
}
