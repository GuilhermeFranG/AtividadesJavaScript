let model = "Argo";
let brand = "Fiat";
let color = "cinza-escuro";
let year = 2018;

console.log(`${brand} ${model} ${year} ${color} 0Km 
Experimente toda a inovação e sofisticação que este carro tem a oferecer! `); /* 
Fiat Argo 2018 cinza-escuro 0Km 
Experimente toda a inovação e sofisticação que este carro tem a oferecer! */

function info(modelo = 'Fusca', ano = 1980, cor = 'azul') {
    console.log(`${modelo} ${ano} ${cor} 100Km
Este ícone automotivo é uma verdadeira joia para colecionadores e entusiastas de carros antigos!`);
}

info(); /* Fusca 1980 de cor azul 100Km
Este ícone automotivo é uma verdadeira joia para colecionadores e entusiastas de carros antigos! */

function criarComprador({ nome, nascimento, cidade, email, senha }) {
    console.log(`Nome: ${nome} 
Data de nascimento: ${nascimento} 
Cidade: ${cidade} 
E-mail: ${email}
Senha: ${senha}`);
}

const comprador = {
    nome: 'Marcela',
    nascimento: '22/03/1978',
    cidade: 'Manaus',
    email: 'marcela@gmail.com',
    senha: '********'
};

criarComprador(comprador);
/*  Nome: Marcela 
    Data de nascimento: 22/03/1978 
    Cidade: Manaus 
    Email: marcela@gmail.com 
    Senha: ******** */