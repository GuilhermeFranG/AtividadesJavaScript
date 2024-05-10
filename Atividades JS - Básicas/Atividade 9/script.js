const textBtn = document.getElementById('textBtn');
const alertBtn = document.getElementById('alertBtn');
const consoleBtn = document.getElementById('consoleBtn');

textBtn.addEventListener('click', showText);
alertBtn.addEventListener('click', showAlert);
consoleBtn.addEventListener('click', showConsole);

function showText() {
    let message = document.getElementById('message');
    if (message.style.display === 'none') {
        message.innerHTML = "Olá, mundo!";
        message.style.fontWeight = 'bold';
        message.style.display = 'block';
        textBtn.style.width = '40px';
        textBtn.style.fontWeight = 'bold';
        textBtn.style.fontSize = '15px';
        textBtn.innerHTML = '^'
        textBtn.style.border = '3px solid blue';
    } else {
        message.style.display = 'none';
        textBtn.style.width = '';
        textBtn.innerHTML = 'Mostrar Texto';
        textBtn.style.fontWeight = '';
        textBtn.style.fontSize = '';
        textBtn.style.border = '';
    };
}

function showAlert() {
    alert(`
Olá, Mundo! 
Seja bem vindo ao universo da programação!
Onde você pode aprender como montar os mais elaborados programas e sites como esse! 🤚😊🤚
(Não é tão elaborado assim...)
                                                                    - Gui_FranG, 2024`);
}

function showConsole() {
    consoleBtn.innerHTML = "F12";
    console.log(`
KKKKKKKK Você é um nerd KKKKKKK...
Brincadeira...eu também sou um nerd ☝🤓.
Mas é...esse botão apenas cria uma mensagem no console...
Parabéns por achar!`);
}