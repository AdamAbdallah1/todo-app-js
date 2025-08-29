document.addEventListener("DOMContentLoaded", () => {
    addTaskBtn = document.getElementById("add-btn");
    addTaskBtn.addEventListener("click", () => {
        taskList = document.getElementById("task-list");
        task = document.getElementById("task-input").value;
        if (task) {
            list = document.createElement("li");
            list.textContent = task;
            taskList.appendChild(list);
        }
    })
})