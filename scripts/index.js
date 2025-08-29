document.addEventListener("DOMContentLoaded", () => {
    addTaskBtn = document.getElementById("add-btn");
    addTaskBtn.addEventListener("click", () => {
        taskList = document.getElementById("task-list");
        task = document.getElementById("task-input").value;
        if (task) {
            const list = document.createElement("li");
            const span = document.createElement("span");
            span.textContent = task;
            list.appendChild(span);

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            
            deleteBtn.addEventListener("click", () => {
                list.remove();
            })

            list.appendChild(deleteBtn);
            taskList.appendChild(list);

            document.getElementById("task-input").value = "";
        }
    })
})