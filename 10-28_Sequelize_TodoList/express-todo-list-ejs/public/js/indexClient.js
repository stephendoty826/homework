
// variables/constants
let headers = {"Content-type": "application/json; charset=UTF-8"}

// DOM variables
let currentUser = document.querySelector("#userSelect")
let todosContainer = document.querySelector("#todosContainer")
let submitForm = document.querySelector("#submitForm")
let listItem = document.querySelector("#listItem")
let getTodos = document.querySelector("#getTodos")

let userID = currentUser.value

getTodos.addEventListener("click", () => {
    userID = currentUser.value
    displayTodos(userID)
})

submitForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    
    // get value of submitted todo
    let newTodo = document.querySelector("#newTodo").value
    
    if(newTodo){

        // use fetch to post newTodo
        let results = await fetch(`/todos/user/${userID}`, {
            method: "POST", 
            headers: headers,
            body: JSON.stringify({
                todoItem: newTodo
            })
        })
    
        // Update DOM
        let todosArr = await results.json()
        updateTodos(todosArr)
    }
})

todosContainer.addEventListener("click", async (e) => {
    let id = e.target.id
    // when trash icon is clicked
    if(e.target.className === "fas fa-trash"){
        
        // fetch to delete specific todo
        let results = await fetch(`/todos/${userID}/${id}`, {
            method: "DELETE", 
            headers: headers
        })

        // Update DOM
        let todosArr = await results.json()
        updateTodos(todosArr)
    }

    // when pencil icon is clicked
    if(e.target.className === "fas fa-pencil-alt"){
        swapVisuallyHidden(id)
    }

    if(e.target.textContent === "Save"){
        let editedTodo = document.querySelector(`#update-${id}`).value
        let results = await fetch(`/todos/${userID}/${id}`, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify({
                todoItem: editedTodo
            })
        })
        
        let todosArr = await results.json()
        swapVisuallyHidden(id)
        updateTodos(todosArr)
    }
    if(e.target.textContent === "Cancel"){
        swapVisuallyHidden(id)
    }
})

// function to swap "visually hidden" class name
const swapVisuallyHidden = (id) => {
    // grabbing DOM elements
    let defaultState = document.querySelector(`#default-state-${id}`)
    let editState = document.querySelector(`#edit-state-${id}`)

    // hide defaultState
    if(defaultState.className === "row pr-3"){
        defaultState.className = "row pr-3 visually-hidden"
        editState.className = "row pr-3"
    }
    //hide editState
    else if(defaultState.className === "row pr-3 visually-hidden"){
        defaultState.className = "row pr-3"
        editState.className = "row pr-3 visually-hidden"
    }
}

// function to display all todos for current user
const displayTodos = async () => {
    let results = await fetch(`/todos/user/${userID}`)
    let todosArr = await results.json()
    updateTodos(todosArr)
}

// function to build todo list for current user
const updateTodos = (todosArr) => {
    let htmlBlock = ""
    todosArr.forEach(todo => {
        htmlBlock += 
        `
            <li id="listItem">
                <div id="default-state-${todo.id}" class="row pr-3">
                    <div class="col-10">
                        ${todo.todoItem}
                    </div>
                    <div class="col-2 text-right pr-2">
                        <button class="button btn">
                            <span>
                                <i id="${todo.id}" class="fas fa-pencil-alt"></i>
                            </span>
                        </button>
                        <button class="button btn">
                            <span>
                                <i id="${todo.id}" class="fas fa-trash"></i>
                            </span>
                        </button>
                    </div>
                </div>


                <div id="edit-state-${todo.id}" class="row pr-3 visually-hidden">
                    <div class="col-10">
                    </div>
                    <div id="editContainer" class="input-group">
                        <div class="input-group-prepend ">
                            <span class="input-group-text h-100">Todo</span>
                        </div>

                        <textarea name="task" id="update-${todo.id}" class="form-control" aria-label="With textarea" placeholder="Edit a todo item...">${todo.todoItem}</textarea>
                        <div class="input-group-append">
                            <button class="btn btn-outline-info h-100" type="submit" id="${todo.id}">Save</button>
                        </div>
                        <div class="input-group-append">
                            <button class="btn btn-outline-danger h-100" type="button" id="${todo.id}">Cancel</button>
                        </div>
                    </div>
                </div>
            </li>
        `
    })
    todosContainer.innerHTML = htmlBlock
} 