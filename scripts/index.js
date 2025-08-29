document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.getElementById("task-list");
    const addTaskBtn = document.getElementById("add-btn");
    const taskInput = document.getElementById("task-input");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const saveTasks = () => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    const createTaskElement = (taskObj, index) => {
        const list = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.style.marginRight = "10px";
        checkbox.checked = taskObj.completed;

        const span = document.createElement("span");
        span.textContent = taskObj.text;
        if (taskObj.completed) {
            span.style.textDecoration = "line-through";
            span.style.color = "#888";
        }

        const controller = document.createElement("div");
        controller.style.display = "flex";
        controller.style.gap = "10px";

        const deleteBtn = document.createElement("button");
        deleteBtn.style.background = "red";
        deleteBtn.style.border = "none";
        deleteBtn.style.cursor = "pointer";
        const deleteIcon = document.createElement("img");
        deleteIcon.src = "../assets/delete-icon.svg";
        deleteIcon.style.width = "20px";
        deleteIcon.style.height = "20px";
        deleteBtn.appendChild(deleteIcon);
        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        const editButton = document.createElement("button");
        editButton.style.background = "#45a049";
        editButton.style.border = "none";
        editButton.style.cursor = "pointer";
        const editIcon = document.createElement("img");
        editIcon.src = "../assets/edit-icon.png";
        editIcon.style.width = "20px";
        editIcon.style.height = "20px";
        editButton.appendChild(editIcon);
        editButton.addEventListener("click", () => {
            span.style.display = "none";
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = span.textContent;
            editInput.style.flex = "1";
            list.insertBefore(editInput, controller);
            editInput.focus();
            const saveEdit = () => {
                if (editInput.value.trim() !== "") {
                    tasks[index].text = editInput.value;
                    saveTasks();
                    renderTasks();
                }
            };
            editInput.addEventListener("keydown", (e) => { if (e.key === "Enter") saveEdit(); });
            editInput.addEventListener("blur", saveEdit);
        });

        checkbox.addEventListener("change", () => {
            tasks[index].completed = checkbox.checked;
            saveTasks();
            renderTasks();
        });

        controller.appendChild(editButton);
        controller.appendChild(deleteBtn);
        list.appendChild(checkbox);
        list.appendChild(span);
        list.appendChild(controller);
        taskList.appendChild(list);
    };

    const renderTasks = () => {
        taskList.innerHTML = "";
        tasks.forEach((taskObj, index) => createTaskElement(taskObj, index));
    };

    addTaskBtn.addEventListener("click", () => {
        const task = taskInput.value.trim();
        if (task) {
            tasks.push({ text: task, completed: false });
            saveTasks();
            renderTasks();
            taskInput.value = "";
        }
    });

    renderTasks();
});
