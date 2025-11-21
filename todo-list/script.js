// let todoList = [];

// let task1 = {
//     "task":"this is task1",
//     "isCompleted":false
// };

// let task2 = {
//     "task":"this is task"
// }

// todoList.push(task1);
// console.log(todoList);
var taskList = [];
function addTask(){
    var taskData = document.getElementById("inputBox").value;
    console.log(taskData);
    var task = {
        "task":taskData,
        "isCompleted":false
    }   
    taskList.push(task);
    console.log(taskList);
    displayTask(taskList);
}

function displayTask(taskList){
    var taskData = document.getElementById("inputBox").value;
    var container = document.getElementById('task-box');
    var task = document.createElement("div");
    task.innerText = taskData;
    container.appendChild(task)
}