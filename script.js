// let users = []
// sessionStorage.setItem("user", JSON.stringify(users))

// let users = JSON.parse(sessionStorage.getItem("users"))
// if(!users) {
//     users = [{ name: "Vasya-0"}]
// } else {
//     users.push({name: `Vasya-${Date.now()}`})
//     console.log("test",users)
// }
// sessionStorage.setItem("users", JSON.stringify(users))
// let createNode = (name) => {
//     let btn = document.createElement("button")
//     btn.innerHTML = name
//     btn.addEventListener('click', ()=>{
//         index = 0
//         users.forEach((elem,i)=>{
//             index=i
//         })
//         console.log(name)
//         users.splice(index,1)
//         sessionStorage.setItem("users", JSON.stringify(users))
//         myRender()
//     })
//     document.body.append(btn)
// }
let user ={}
let tasks =[]
let taskId = 0
let todolist = document.getElementById("todolist")
let name_ok = document.getElementById("name_ok")
let todo_ok = document.getElementById("todo_ok")
let hello = document.querySelector(".hello")
let userStorage = JSON.parse(sessionStorage.getItem("user"))

name_ok.addEventListener("click",()=>{
    let user_name = document.getElementById("name").value
    if (user_name === userStorage.name) {
        hello.innerHTML = `Hello ${user_name}`
        let tasksStorage = JSON.parse(sessionStorage.getItem("tasks"))
        tasks = tasksStorage
        tasksStorage.forEach((item) => {
            render(item)
        })
    }
    user = {name: user_name}
    sessionStorage.setItem("user", JSON.stringify(user))  
    document.getElementById("name").value = ""
})

function render (el) {
let div = document.createElement("div")
div.className = "task"
let textDiv = document.createElement("div")
textDiv.innerHTML = el.task
    if (el.done === true) {
        textDiv.style.textDecoration = "line-through"
    }
div.append(textDiv)
let button = document.createElement("button");
button.innerHTML = "done"
button.setAttribute("id",el.id)
div.append(button)
todolist.append(div)
}

todo_ok.addEventListener("click", ()=> {
    let task = document.getElementById("task").value
    document.getElementById("task").value = ""
    taskId++
    let taskObj = {task: task, done: false, id: taskId}
    tasks.push(taskObj)
    render(taskObj)
    sessionStorage.setItem("tasks", JSON.stringify(tasks))
})

todolist.addEventListener("click",(event) => {
    event.target.parentElement.querySelector("div").style.textDecoration = "line-through"
    let num  = event.target.id
    tasks.forEach((element) => {
      if (element.id == num){
        element.done = true
    }
})
sessionStorage.setItem("tasks", JSON.stringify(tasks))
})





