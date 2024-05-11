let isExpanded = false;
let isMoreExpanded = false;
let isOpened = false;

function plus() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 + num2;
    if (isExpanded) {
        var num3 = parseInt(document.getElementById("num3").value);
        var num4 = parseInt(document.getElementById("num4").value);
        result += num3 + num4;
    }
    if (isMoreExpanded) {
        var num5 = parseInt(document.getElementById("num5").value);
        var num6 = parseInt(document.getElementById("num6").value);
        result += num5 + num6;
    }
    document.getElementById("result").innerText = result;
}

function minus() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 - num2;
    if (isExpanded) {
        var num3 = parseInt(document.getElementById("num3").value);
        var num4 = parseInt(document.getElementById("num4").value);
        result -= num3 + num4;
    }
    if (isMoreExpanded) {
        var num5 = parseInt(document.getElementById("num5").value);
        var num6 = parseInt(document.getElementById("num6").value);
        result -= num5 + num6;
    }
    document.getElementById("result").innerText = result;
}

function times() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 * num2;

    if (isExpanded) {
        var num3 = parseInt(document.getElementById("num3").value);
        var num4 = parseInt(document.getElementById("num4").value);
        result *= num3 * num4;
    }

    if (isMoreExpanded) {
        var num5 = parseInt(document.getElementById("num5").value);
        var num6 = parseInt(document.getElementById("num6").value);
        result *= num5 * num6;
    }

    document.getElementById("result").innerText = result;
}

function divide() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 / num2;

    if (isExpanded) {
        var num3 = parseInt(document.getElementById("num3").value);
        var num4 = parseInt(document.getElementById("num4").value);
        result /= (num3 * num4);
    }

    if (isMoreExpanded) {
        var num5 = parseInt(document.getElementById("num5").value);
        var num6 = parseInt(document.getElementById("num6").value);
        result /= num5 * num6;
    }

    document.getElementById("result").innerText = result;
}

const moreValues = document.querySelectorAll('.hidden');
const moreValuesAgain = document.querySelectorAll(".hidden2");
const showMoreBtn = document.getElementById('showMore');
const evenMoreBtn = document.getElementById('evenMore');
const body = document.body;

function showMore() {
    moreValues.forEach(moreValue => {
        if (!isExpanded) {
            moreValue.classList.remove('hidden');
            body.style.height = "140vh";
            showMoreBtn.textContent = "fechar";
            advanced.style.display = "none";
        } else {
            moreValue.classList.add('hidden');
            body.style.height = "100vh";
            showMoreBtn.textContent = "Cálculo Múltiplo";
            advanced.style.display = "inline";
        }
    });
    isExpanded = !isExpanded;
}

function showMoreAgain() {
    moreValuesAgain.forEach(moreValueAgain => {
        if (!isMoreExpanded) {
            moreValueAgain.classList.remove('hidden2');
            body.style.height = "175vh";
            evenMoreBtn.textContent = "fechar";
            showMoreBtn.style.display = "none";
        } else {
            moreValueAgain.classList.add('hidden2');
            body.style.height = "140vh";
            showMoreBtn.style.display = "inline";
            evenMoreBtn.textContent = "Mais";
        }
    });
    isMoreExpanded = !isMoreExpanded;
}

const operators = document.querySelectorAll(".operator");

const advBtn = document.querySelectorAll(".hidden3");
const advanced = document.getElementById("advanced");
const form = document.getElementById("numForm");

function openAdvanced() {
    advBtn.forEach(advBtn => {
        operators.forEach(operator => {
            if (!isOpened) {
                advBtn.classList.remove('hidden3');
                advanced.innerHTML = "&#10148;";
                advanced.style.rotate = "180deg";
                showMoreBtn.style.display = "none";
                num2.style.display = "none";
                form.style.textAlign = "center";
                operator.classList.add('hidden3');
            } else {
                advBtn.classList.add('hidden3');
                advanced.textContent = "Avançado";
                advanced.style.rotate = "0deg";
                showMoreBtn.style.display = "inline";
                num2.style.display = "inline";
                form.style.textAlign = "";
                operator.classList.remove('hidden3');
            }
        })
    });
    isOpened = !isOpened;
}

function squared() {
    var num1 = parseInt(document.getElementById("num1").value);
    var result = num1 * num1;

    document.getElementById("result").innerText = result;
}

function cubed() {
    var num1 = parseInt(document.getElementById("num1").value);
    var result = num1 ** 3;

    document.getElementById("result").innerText = result;
}

function potentiation() {
    var num1 = parseInt(document.getElementById("num1").value);
    var raised = parseInt(document.getElementById("raised").value);
    var result = Math.pow(num1, raised); // Calcula a potência usando Math.pow() (1º valor elevado pelo 2º) //

    document.getElementById("result").innerText = result;
}

function squareRoot() {
    var num1 = parseInt(document.getElementById("num1").value);
    var result = Math.sqrt(num1); // Calcula a raiz usando Math.sqrt() //

    document.getElementById("result").innerText = result;
}

function rootX() {
    var num1 = parseInt(document.getElementById("num1").value);
    var root = parseInt(document.getElementById("root").value);
    var result = Math.pow(num1, 1 / root); // Calcula a raiz usando Math.pow() elevado a 1/raiz //

    document.getElementById("result").innerText = result;
}