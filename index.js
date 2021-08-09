


let ul = document.getElementById("task-list");
let inputString = document.getElementById("input-task");
let addTaskBtn = document.getElementById("add-task-button");

addTaskBtn.addEventListener("click", addTask);
document.addEventListener("keypress", addTask);

function addDeleteButton()
{
    let deletebuttons = document.getElementsByClassName("delete-btn")
    for (let i=0;i<deletebuttons.length;i++)
    {
        let currentbutton = deletebuttons[i];
        currentbutton.addEventListener("click",deleteTodoElement)
    }
}
addDeleteButton();

function deleteTodoElement(e)
{   
    console.log(typeof e);
    let deleteBtn = e.target;
    let parent = deleteBtn.parentElement;
    ul.removeChild(parent);
}

function addTask(e)
{

    if (e.code !== undefined && e.code  !== "Enter") return;
    let li = document.createElement("li");
    let input = document.createElement("input");
    let span = document.createElement("span");
    let deleteBtn = document.createElement("button");

    input.setAttribute("type", "checkbox");

    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "X";
  
    span.className = "task";
    span.innerHTML = inputString.value;

    deleteBtn.addEventListener("click",deleteTodoElement);

    if (inputString.value != ""){
        li.append(input);
        li.append(span);
        li.append(deleteBtn);
        ul.append(li);
        inputString.value = "";
    }
    inputString.focus();
}












