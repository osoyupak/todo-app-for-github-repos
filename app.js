//Choosing DOM Elements
const inputForm = document.getElementById("inputForm");
const inputElement = document.getElementById("inputElement");
const formSelect = document.getElementById("form-select");
const tableBody = document.getElementById("tableBody");

let username = "osoyupak";
const github = new Github();
const ui = new UI();

eventlisteners();

function eventlisteners() {

    inputForm.addEventListener("submit", createNewTodo);
    document.addEventListener("DOMContentLoaded", load);
    tableBody.addEventListener("click", clearTodo);
}


function clearTodo(e) {
    if(e.target.className=="fas fa-times") {
        ui.clearfromUI(e);
        Storage.removeFromStorage(e);
        ui.showAlert("primary", "You completed one item. Congratulations!")
    }
}



function createNewTodo(e) {
    const inputEl = inputElement.value.trim();
    if(formSelect.value=="Choose the repo") {
        ui.showAlert("warning","Please choose the repo");
    } else if(inputEl=="") {
        ui.showAlert("danger","please type a todo");

    } else {
        const content = inputEl;
        const repo = formSelect.value;
        const todo = new Todo(content,repo);
        Storage.addToStorage(todo);
        ui.loadUI();
        ui.showAlert("success", "You added one todo successfully")
    }

    ui.clearInput();
    e.preventDefault();

}

function load() {
    ui.loadUI();
    connectGithub();

}

function connectGithub() {
    github.getGithubData(username)
    .then(response => {
        ui.showRepos(response.repo);
        ui.loadUserData(response.user);
    })
    .catch(err => console.log(err));

}