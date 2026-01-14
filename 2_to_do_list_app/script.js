const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

addBtn.addEventListener("click",addTask);

function addTask(){
    textInput = taskInput.value.trim();
    if(!textInput) return;
    tasks.push(textInput)
    taskInput.value="";
    renderTasks();
}

function renderTasks(){

    taskList.innerHTML="";

}