class UI {
    constructor() {
        this.accordionDisplay = document.getElementById("accordionDisplay");
        this.inputElement = document.getElementById("inputElement");
    }

    clearInput() {
        this.inputElement.value = "";
    }

    showRepos(repos) {

        repos.forEach(repo => {
            this.accordionDisplay.innerHTML += `
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        ${repo.name}
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul class="list-group" id="list">
                            <li class="list-group-item d-flex justify-content-between">An item <a href="#"><i class="fas fa-times"></i></a></li>

                        </ul>
                    </div>
                </div>
            </div>
            `

        });

    }
    /*
    addItem() {
        //<li class="list-group-item d-flex justify-content-between">An item <a href="#"><i class="fas fa-times"></i></a></li>


        repos.forEach(repo => {
            if (repo.getElementsByTagName("div")[1] === "accordion-collapse collapse show") {
                const li = document.createElement("li");
                li.innerHTML = this.inputElement.innerText.trim();
                repo.getElementsByTagName("div")[1].firstElementChild.firstElementChild.innerText += li
            }
        })
    }
    */
}