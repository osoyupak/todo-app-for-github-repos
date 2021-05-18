class UI {
    constructor() {
        this.formSelect = document.getElementById("form-select");
        this.inputElement = document.getElementById("inputElement");
        this.tableBody = document.getElementById("tableBody");
        
    }

    clearInput() {
        this.inputElement.value = "";
    }

    showRepos(repos) {
        repos.forEach(element => {
            this.formSelect.innerHTML += `
            <option>${element.name}</option>
            `
        });
    }

    loadUserData(user) {
        document.getElementById("userName").innerText=user.name;
        document.getElementById("userPhoto").src = user.avatar_url;
        document.getElementById("login").innerText = user.login;
        document.getElementById("bio").innerText = user.bio;
        document.getElementById("lastUpdated").innerText = user.updated_at.slice(0,10);
        document.getElementById("location").innerText = user.location;
        document.getElementById("repoQuantity").innerText = user.public_repos;
    }


    addToUI(todo) {
        this.tableBody.innerHTML += `        
        <tr>
        <td></td>
        <td>${todo.repo}</td>
        <td>${todo.content}</td>
        <td><a href="#"><i class="far fa-trash-alt"></i></a></td>
      </tr>`

    }

    clearfromUI(e) {
        const todo = e.target.parentElement.parentElement.parentElement;
        todo.remove();
    }

    showAlert(type, message) {
        let div =document.createElement("div")
        div.className =`alert alert-${type} mt-3`
        div.innerText =message;
        document.getElementById("alert").appendChild(div);
        setTimeout(()=> {
            div.remove()
        }, 1000);
    }

    loadUI() {
        this.tableBody.innerHTML="";
        let todos = Storage.getTodosFromStorage();
        todos.forEach((todo)=>{
            this.addToUI(todo);
        })
    }



}



