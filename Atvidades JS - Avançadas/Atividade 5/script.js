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
    li.textContent = newToDoText.charAt(0).toUpperCase() + newToDoText.slice(1).toLowerCase();

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
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

const nome = prompt("Qual seu nome?");
const fundo = prompt("Qual sua cor favorita?");

const user = document.getElementById("user");
user.innerHTML = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();

const favCor = document.getElementById("favCor");
favCor.innerHTML = fundo.charAt(0).toUpperCase() + fundo.slice(1).toLowerCase();

if (fundo === 'azul') {
    user.style.backgroundColor = "#0088ffcc";
    user.style.textShadow = "1px 1px 2px #eee";
    user.style.border = "3px solid #00f";
} else if (fundo === 'vermelho') {
    user.style.backgroundColor = "#da5a5acc";
    user.style.textShadow = "1px 1px 2px #800000";
    user.style.border = "3px solid #f00";
} else if (fundo === 'verde') {
    user.style.backgroundColor = "#98f30fcc";
    user.style.textShadow = "1px 1px 2px #369636cc";
    user.style.border = "3px solid #006400";
} else if (fundo === 'amarelo') {
    user.style.backgroundColor = "#ffe23baa";
    user.style.textShadow = "1px 1px 2px #a78800";
    user.style.border = "3px solid #e6ba4dcc";
} else {
    user.style.backgroundColor = "#f5f5f5";
    user.style.textShadow = "1px 1px 2px #bbb";
    user.style.border = "3px outset #ccc";
}