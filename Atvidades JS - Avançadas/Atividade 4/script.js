function calcularIdade() {
    var pessoas = []
    var pessoa;

    do {
        var nome = prompt("Digite seu nome:");
        var dataNascimento = prompt("Digita a sua data de nascimento (DD/MM/AAAA)");

        var padraoData = dataNascimento.split("/");
        var dia = parseInt(padraoData[0]);
        var mes = parseInt(padraoData[1]);
        var ano = parseInt(padraoData[2]);

        var dataAtual = new Date();
        var anoAtual = dataAtual.getFullYear();
        var mesAtual = dataAtual.getMonth() + 1;
        var diaAtual = dataAtual.getDate();

        var idade;

        if (mesAtual > mes || (mesAtual === mes && diaAtual >= dia)) {
            idade = anoAtual - ano;
        } else {
            idade = anoAtual - ano - 1;
        }

        pessoa = {
            nome: nome,
            idade: idade,
            dataNascimento: dataNascimento
        };

        pessoas.push(pessoa);

        var continuar = confirm("Deseja continuar inserindo dados?");
    } while (continuar);

    var oldest = pessoas[0];
    var youngest = pessoas[0];

    for (var i = 1; i < pessoas.length; i++) {
        if (pessoas[i].idade > oldest.idade) {
            oldest = pessoas[i];
        }

        if (pessoas[i].idade < youngest.idade) {
            youngest = pessoas[i];
        }
    }

    var tabela = '<table>';
    tabela += "<thead><tr><th>Nome</th><th>Idade</th><th>Data de Nascimento</th></tr></thead>";

    for (var i = 0; i < pessoas.length; i++) {
        var pessoa = pessoas[i];

        tabela += `<tbody><tr>
        <td class="nome">${pessoa.nome}</td>
        <td>${pessoa.idade}</td>
        <td>${pessoa.dataNascimento}</td>
        </tr></tbody>`;
    }

    tabela += `<tfoot>
    <tr><td colspan="3" class="old">Pessoa mais velha: ${oldest.nome} (${oldest.idade})</td></tr> 
    <tr><td colspan="3" class="young">Pessoa mais nova: ${youngest.nome} (${youngest.idade})</td></tr>
    </tfoot>`;
    // colspan: atributo HTML para aumentar o tamanho da coluna
    // rowspan: atributo HTML para aumentar o tamanho da linha

    tabela += '</table>';

    document.getElementById("tabelaIdade").innerHTML = tabela;
}