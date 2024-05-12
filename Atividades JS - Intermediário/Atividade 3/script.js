const getHours = () => { // const que engloba todo o horário 

    let tempoAtual = new Date();
    const horas = tempoAtual.getHours();
    const hora = horas < 10 ? `0${horas}` : horas; // Se a hora < 10, adiciona o '0' na frente
    const minutos = tempoAtual.getMinutes();
    const minuto = minutos < 10 ? `0${minutos}` : minutos; // Se os minutos < 10, adiciona o '0' na frente
    const segundos = tempoAtual.getSeconds();
    const segundo = segundos < 10 ? `0${segundos}` : segundos; // Se os segundos < 10, adiciona o '0' na frente

    let horaFinal = `${hora}:${minuto}:${segundo}`;
    document.getElementById('time').innerHTML = horaFinal;
}

setInterval(() => {
    getHours();
}, 1000) // Intervalo que atualiza o horário da página a cada 1s


const getDate = () => { // const que engloba toda a data 

    let tempoAtual = new Date();
    const meses = tempoAtual.getMonth() + 1;
    const mes = meses < 10 ? `0${meses}` : meses; // Se o mês < 10, adiciona o '0' na frente
    const dias = tempoAtual.getDate();
    const dia = dias < 10 ? `0${dias}` : dias; // Se o dia < 10, adiciona o '0' na frente
    const ano = tempoAtual.getFullYear();


    let dataFinal = `${dia}/${mes}/${ano}`;
    document.getElementById('date').innerHTML = dataFinal;
}

setInterval(() => {
    getDate();
}, 1000) // Intervalo que atualiza a data da página a cada 1s