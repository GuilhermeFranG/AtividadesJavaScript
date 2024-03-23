let frutas = ['maçã', 'banana', 'laranja'];
let biscoitos = ['Oreo', 'traquinas', 'negresco', 'Maria'];
let times = ['Grêmio', 'Inter', 'Vasco', 'São Paulo', 'Flamengo'];
let pessoa1 = "Pedro";
let pessoa2 = "João";
let palavra = "manuscrito";
// Usando Map //
let mapa = new Map([["a", 1], ["b", 2], ["c", 3]]);


// for //
// Testando resultados baseados em diferentes comprimentos //
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

for (let i = 0; i < 2; i++) {
    console.log(frutas[i]);
}

for (let i = 0; i < 9; i++) {
    console.log(times[i]);
}

for (let i = 0; i < biscoitos.length; i++) {
    console.log(frutas[i]);
}

for (let i = 0; i < times.length; i++) {
    console.log(biscoitos[i]);
}

// Usando o comprimento de arrays para escrever uma string //
for (let i = 0; i < frutas.length; i++) {
    console.log(pessoa1[i]);
}
for (let i = 0; i < biscoitos.length; i++) {
    console.log(pessoa1[i]);
}
for (let i = 0; i < times.length; i++) {
    console.log(pessoa1[i]);
}

for (let i = 0; i < frutas.length; i++) {
    console.log(pessoa2[i]);
}
for (let i = 0; i < biscoitos.length; i++) {
    console.log(pessoa2[i]);
}
for (let i = 0; i < times.length; i++) {
    console.log(pessoa2[i]);
}


// for ... of //
for (let fruta of frutas) {
    console.log(fruta);
}

for (let valor of palavra) {
    console.log(valor);
}

// for ... of com Map //
for (let entry of mapa) {
    console.log(entry);
}

for (let [key, value] of mapa) {
    console.log(value);
}

for (let [key, value] of mapa) {
    console.log(key);
}