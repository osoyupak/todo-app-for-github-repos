class Storage {

    static addToStorage(newTodo) {
        let todos = this.getTodosFromStorage();
        todos.push(newTodo);
        todos = this.sortTodos(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
    }


    static removeFromStorage(e) {
        let removeContent = e.target.parentElement.parentElement.parentElement.firstChild.nextSibling.nextSibling.nextSibling.innerText;
        let todos = this.getTodosFromStorage();
        todos.forEach((todo, index) => {
            if (todo.content == removeContent) {
                todos.splice(index, 1);
                localStorage.setItem("todos", JSON.stringify(todos))
            }
        })
    }

    static getTodosFromStorage() {
        let todos;
        if (localStorage.getItem("todos") == null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem("todos"));
        }
        return todos;
    }

    static sortTodos(todos) {
        function compare(a, b) {
            if (a.repo < b.repo) {
                return -1;
            }
            if (a.repo > b.repo) {
                return 1;
            }
            return 0;
        }
        todos.sort(compare);
        return todos;
    }



}


