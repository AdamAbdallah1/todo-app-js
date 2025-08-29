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
            deleteBtn.style.marginLeft = "10px";
            deleteBtn.style.background = "black"; 
            deleteBtn.style.border = "none";
            deleteBtn.style.cursor = "pointer";

            const deleteIcon = document.createElement("img");
            deleteIcon.src = "../assets/delete-icon.svg";
            deleteIcon.style.width = "20px";
            deleteIcon.style.height = "20px";

            deleteBtn.appendChild(deleteIcon);

            deleteBtn.addEventListener("click", () => {
                list.remove();
            });

            list.appendChild(deleteBtn);
            taskList.appendChild(list);

            document.getElementById("task-input").value = "";
        }
    })
})