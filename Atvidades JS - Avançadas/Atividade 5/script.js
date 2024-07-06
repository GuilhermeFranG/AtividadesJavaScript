document.addEventListener("DOMContentLoaded", () => {
    const toDoForm = document.getElementById("toDoForm");
    const newToDo = document.getElementById("newToDo");
    const toDoList = document.getElementById("toDoList");

    toDoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newToDoText = newToDo.value.trim();
        if (newToDoText) {
            addToDoItem(newToDoText);
            newToDo.value = '';
        }
    });
})

function addToDoItem(newToDoText) {
    const li = document.createElement('li');
    li.textContent = formatarTexto(newToDoText);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '&times;';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    li.appendChild(deleteButton);
    toDoList.appendChild(li);
}

function formatarTexto(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

const loginButton = document.getElementById("login");
loginButton.addEventListener('click', () => {
    toDoForm.classList.remove("hidden");
    loginButton.style.display = 'none';

    document.getElementById("toDoContainer").classList.remove("hidden");

    const nome = prompt("Qual seu nome?");
    const favCor = prompt("Qual sua cor favorita?");

    var user = {
        nome: formatarTexto(nome),
        corFavorita: formatarTexto(favCor)
    };

    const userName = document.getElementById("user");
    const userFavCor = document.getElementById("favCor");

    userName.classList.remove("hidden");
    userFavCor.classList.remove("hidden");
    userName.innerHTML = user.nome;
    userFavCor.innerHTML = user.corFavorita;

    if (favCor === 'azul') {
        userName.style.backgroundColor = "#0088ffcc";
        userName.style.textShadow = "1px 1px 2px #3535ff";
        userName.style.border = "3px solid #00f";
    } else if (favCor === 'vermelho') {
        userName.style.backgroundColor = "#da5a5acc";
        userName.style.textShadow = "1px 1px 2px #800000";
        userName.style.border = "3px solid #f00";
    } else if (favCor === 'verde') {
        userName.style.backgroundColor = "#98f30fcc";
        userName.style.textShadow = "1px 1px 2px #369636cc";
        userName.style.border = "3px solid #006400";
    } else if (favCor === 'amarelo') {
        userName.style.backgroundColor = "#ffe23baa";
        userName.style.textShadow = "1px 1px 2px #a78800";
        userName.style.border = "3px solid #e6ba4dcc";
    } else {
        userName.style.backgroundColor = "#f5f5f5";
        userName.style.textShadow = "1px 1px 2px #bbb";
        userName.style.border = "3px outset";
        userName.style.animation = "colorBorder 10s infinite";
    }
})