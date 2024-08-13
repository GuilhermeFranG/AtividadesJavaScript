function formatarNome(nome) {
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
}

function criarTabela() {
    var alunos = []
    var aluno;

    do {
        var nome = prompt("Digite o nome do aluno");
        var notaTrimestre1 = parseFloat(prompt("Digite a nota do 1º Trimestre:"));
        var notaTrimestre2 = parseFloat(prompt("Digite a nota do 2º Trimestre:"));
        var notaTrimestre3 = parseFloat(prompt("Digite a nota do 3º Trimestre:"));
        var notaTrimestre4 = parseFloat(prompt("Digite a nota do 4º Trimestre:"));
        var frequencia = parseFloat(prompt("Digite a frequencia do aluno (em %):"));
        var mediaFinal = parseFloat((notaTrimestre1 + notaTrimestre2 + notaTrimestre3 + (notaTrimestre4 * 2)) / 5);

        aluno = {
            nome: formatarNome(nome),
            notaTrimestre1: notaTrimestre1.toFixed(1),
            notaTrimestre2: notaTrimestre2.toFixed(1),
            notaTrimestre3: notaTrimestre3.toFixed(1),
            notaTrimestre4: notaTrimestre4.toFixed(1),
            frequencia: frequencia.toFixed(0),
            mediaFinal: mediaFinal.toFixed(1)
        };

        alunos.push(aluno);

        var continuar = confirm("Deseja continuar cadastrando?");
    } while (continuar);

    var tabela = "<table>";
    tabela += `<tr>
    <th>Nome</th>
    <th>Nota 1º Trimestre </th>
    <th>Nota 2º Trimestre </th>
    <th>Nota 3º Trimestre </th>
    <th>Nota 4º Trimestre </th>
    <th>Frequencia (%)</th>
    <th>Média Final</th>
    </tr>`;

    for (var i = 0; i < alunos.length; i++) {
        var aluno = alunos[i];

        tabela += `
        <tr ${aluno.mediaFinal >= 6 && aluno.frequencia >= 75 ? " class='aprovado'" : " class='reprovado'"}>
            <td class='name'>${aluno.nome}</td>
            <td>${aluno.notaTrimestre1}</td>
            <td>${aluno.notaTrimestre2}</td>
            <td>${aluno.notaTrimestre3}</td>
            <td>${aluno.notaTrimestre4}</td>
            <td>${aluno.frequencia}%</td>
            <td>${aluno.mediaFinal}</td>
        </tr>
        `;
    }

    tabela += "</table>";

    document.getElementById('tabelaAlunos').innerHTML = tabela;
}