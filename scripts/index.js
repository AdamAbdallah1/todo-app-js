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
            deleteBtn.style.background = "red"; 
            deleteBtn.style.border = "none";
            deleteBtn.style.cursor = "pointer";

            const deleteIcon = document.createElement("img");
            deleteIcon.src = "../assets/delete-icon.svg";
            deleteBtn.alt = "Delete";
            deleteIcon.style.width = "20px";
            deleteIcon.style.height = "20px";

            deleteBtn.appendChild(deleteIcon);

            deleteBtn.addEventListener("click", () => {
                list.remove();
            });

            taskList.appendChild(list);

            const editButton = document.createElement("button");
            editButton.style.background = "#45a049";
            editButton.style.border = "none";
            editButton.style.cursor = "pointer";

            const editIcon = document.createElement("img");
            editIcon.src = "../assets/edit-icon.png";
            editIcon.alt = "Edit";
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
                        span.textContent = editInput.value;
                    }
                    span.style.display = "inline";
                    editInput.remove();
                };

                editInput.addEventListener("keydown", (e) => {
                    if (e.key === "Enter") saveEdit();
                });

                editInput.addEventListener("blur", saveEdit);
            });

            document.getElementById("task-input").value = "";
            controller = document.createElement("div");
            controller.style.display = "flex";
            controller.style.gap = "10px"

            controller.appendChild(deleteBtn);
            controller.appendChild(editButton);
            list.appendChild(controller)
        }
    })
})