let form = document.querySelector("form")
let input = document.querySelector("input")
const template = documnet.querySelector("template").content
const parent = document.querySelector(".todos_ul")
const todos = []
let index = 0
function handleSub(event){
    event.preventDefault()
    index++
    const todo = {
        name : input.value,
        id: index
    }
    todos.push(todo)
    console.log(todos)
    renders(todos)
    input.value = null
} 
form.addEventListener("submit", handleSub)
function renders(array){
    parent.innerHTML = null
    for(let i = 0;i<array.length; i++){
        let clone = template.cloneNode(true)
        let nameTodos = clone.querySelector(".todos_name")
        let deleteBtn = clone.querySelector(".delete")
        deleteBtn.id = array[i].id
        deleteBtn.addEventListener("click" , handleDelete)
        nameTodos.textContent = array[i].name
        parent.appendChild(clone)
    }
} 
function handleDelete(event){
    console.log("ishladi")
    let id = event.target.id
    let parent = event.target.parentNode
    let ota = parent.parentNode
    console.log(parent)
    for(let i = 0; i<todos.length; i++){
        if(todos[i].id === Number(id)){
            todos.splice(i, 1)
            ota.remove()
        }
    }
    console.log(todos)
} 