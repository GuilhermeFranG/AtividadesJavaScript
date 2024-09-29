const listaPalavras = ['javascript', 'html', 'css', 'front', 'evoluir', 'tags', 'atributo', 'fullstack', 'landingpage'];

let palavraEscolhida;
let exibicaoPalavra;
let letrasChutadas;
let tentativasRestantes;
let numErros;

// Função para começar o Jogo modo aleatório//
function modoAleatorio() {
    document.getElementById('game').style.display = 'block';
    document.getElementById('gameModes').style.display = 'none';
    document.getElementById('footer').style.position = 'relative';

    // Sortear uma palavra aleatoria //
    palavraEscolhida = listaPalavras[Math.floor(Math.random() * listaPalavras.length)];
    console.log(palavraEscolhida);

    // Exibição dos Underscores/Underlines "_" //
    exibicaoPalavra = Array(palavraEscolhida.length).fill('_');
    console.log(exibicaoPalavra);

    // Lista de letras chutadas //
    letrasChutadas = [];

    // Número de tentativas //
    tentativasRestantes = 7;

    // Número de erros //
    numErros = 0;

    atualizarExibicao();
}

// Função para começar o Jogo modo normal //
function modoNormal() {
    document.getElementById('game').style.display = 'block';
    document.getElementById('gameModes').style.display = 'none';
    document.getElementById('footer').style.position = 'relative';

    // Sortear uma palavra aleatoria //
    palavraEscolhida = prompt("Escolha uma palavra:");
    console.log(palavraEscolhida);

    // Exibição dos Underscores/Underlines "_" //
    exibicaoPalavra = Array(palavraEscolhida.length).fill('_');
    console.log(exibicaoPalavra);

    // Lista de letras chutadas //
    letrasChutadas = [];

    // Número de tentativas //
    tentativasRestantes = 7;

    // Número de erros //
    numErros = 0;

    atualizarExibicao();
}

function atualizarExibicao() {
    document.getElementById('palavra').innerText = exibicaoPalavra.join(' ');
    // Join = Junta elementos de uma array com um separador selecionado em uma string. // 
    document.getElementById('letrasChutadas').innerText = `${letrasChutadas.join(', ')}`;

    document.getElementById('forca').src = `img/forca${numErros}.png`;

    document.getElementById('entradaLetra').disabled = false;
    document.getElementById('btnChutar').disabled = false;
    document.getElementById('mensagem').innerText = '';
    let btnReset = document.querySelectorAll('.reset');
    btnReset.forEach(btnReset => {
        btnReset.style.display = 'none';
    });

    // Terminar jogo //
    if (!listaPalavras.includes(palavraEscolhida)) {
        if (tentativasRestantes === 0) {
            terminarJogoNormal(`Você perdeu! 😥
        A palavra era ${palavraEscolhida}`);
        } else if (!exibicaoPalavra.includes('_')) {
            terminarJogoNormal(`🎊🎉🎊🎉🎊🎉
        Parabéns! Você acertou!
        🎊🎉🎊🎉🎊🎉`)
        }
    } else {
        if (tentativasRestantes === 0) {
            terminarJogoAleatorio(`Você perdeu! 😥
        A palavra era ${palavraEscolhida}`);
        } else if (!exibicaoPalavra.includes('_')) {
            terminarJogoAleatorio(`🎊🎉🎊🎉🎊🎉
        Parabéns! Você acertou!
        🎊🎉🎊🎉🎊🎉`)
        }
    }
}

function chutarLetra() {
    const entradaLetra = document.getElementById("entradaLetra");
    const letra = entradaLetra.value.toLowerCase();

    // Verificar se a letra é válida //
    if (!letra.match(/[a-zà-ùç]/i)) {
        // .match() = Verifica se o valor encotra com pedido, se não retorna null //
        // a-zà-ùç/i = De A a Z e caracteres especiais //
        alert('Por favor, digite uma letra válida.');
        return;
    }

    if (letrasChutadas.includes(letra)) { // .includes() = Verifica se dentro de uma array tem um valor/objeto //
        alert('Você já chutou essa letra. Tente novamente.');
        return;
    }

    letrasChutadas.push(letra);

    // Loop para colocar as letras no lugar dos underlines //
    if (palavraEscolhida.includes(letra)) {
        for (let i = 0; i < palavraEscolhida.length; i++) {
            if (palavraEscolhida[i] === letra) {
                exibicaoPalavra[i] = letra;
            }
        }
    } else {
        tentativasRestantes--;
        numErros++;
    }

    entradaLetra.value = '';

    atualizarExibicao();
}

function terminarJogoAleatorio(mensagem) {
    // Desabilitar botão e campo de entrada //
    document.getElementById('entradaLetra').disabled = true;
    document.getElementById('btnChutar').disabled = true;

    // Exibir mensagem //
    document.getElementById('mensagem').innerText = mensagem;

    // Exibir resetButton //
    document.getElementById('resetBtnRandom').style.display = 'block';
}

function terminarJogoNormal(mensagem) {
    // Desabilitar botão e campo de entrada //
    document.getElementById('entradaLetra').disabled = true;
    document.getElementById('btnChutar').disabled = true;

    // Exibir mensagem //
    document.getElementById('mensagem').innerText = mensagem;

    // Exibir resetButton //
    document.getElementById('resetBtnNormal').style.display = 'block';
}