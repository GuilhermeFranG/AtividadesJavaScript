function verificarPremio(id) {
    let premio = Math.floor(Math.random() * 10) + 1;
    if (id == premio) {
        alert(`✨🎊🎉🎉🎉🎊✨
Parabêns, você ganhou o prêmio!!!
✨🎊🎉🎉🎉🎊✨
R$5,00 reais no PIX!
...brincadeira`);
    } else {
        alert(`😢😢😢😢😢😢😢
Você errou...
O retângulo correto era o ${premio}`);
    }
}