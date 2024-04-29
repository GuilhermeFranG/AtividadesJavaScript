const getHours = () => {

    let tempoAtual = new Date();
    const horas = tempoAtual.getHours();
    const hora = horas < 10 ? `0${horas}` : horas;
    const minutos = tempoAtual.getMinutes();
    const minuto = minutos < 10 ? `0${minutos}` : minutos;
    const segundos = tempoAtual.getSeconds();
    const segundo = segundos < 10 ? `0${segundos}` : segundos;

    let horaFinal = `${hora}:${minuto}:${segundo}`;
    document.getElementById('time').innerHTML = horaFinal;
}

setInterval(() => {
    getHours();
}, 1000)


const getDate = () => {

    let tempoAtual = new Date();
    const meses = tempoAtual.getMonth() + 1;
    const mes = meses < 10 ? `0${meses}` : `${meses}/`;
    const dias = tempoAtual.getDate();
    const dia = dias < 10 ? `0${dias}` : `${dias}`;
    const ano = tempoAtual.getFullYear();


    let dataFinal = `${dia}/${mes}/${ano}`;
    document.getElementById('date').innerHTML = dataFinal;
}

setInterval(() => {
    getDate();
}, 1000)