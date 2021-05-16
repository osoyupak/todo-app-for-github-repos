//Choosing DOM Elements
this.inputForm = document.getElementById("inputForm");
let username = "osoyupak";
const github = new Github();
const ui = new UI();

github.getGithubData(username)
.then(response => {
    ui.showRepos(response.repo); 
})
.catch(err => console.log(err));


eventlisteners();

function eventlisteners() {

    inputForm.addEventListener("submit", getTodo);
    document.addEventListener("DOMContentLoaded", getAllTodos);
}


function getTodo(e) {

    console.log(inputElement.value);

    ui.clearInput();

    e.preventDefault();
}

function getAllTodos() {
    //take all todos from storage and add ui
}