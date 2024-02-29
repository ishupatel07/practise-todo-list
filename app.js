const inputTask = document.getElementById("task");
const taskList = document.getElementById("taskList");
const addButton = document.querySelector("button");
const removeList = document.getElementById("removeLi");

function addTask() {
    const taskValue = inputTask.value.trim().toLowerCase();

    if (taskValue) {
        const taskLi = document.createElement("li");
        taskLi.textContent = taskValue;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "remove";
        taskLi.appendChild(removeBtn);

        removeBtn.addEventListener('click', () => {
            if (taskLi.parentNode === taskList) {
                taskList.removeChild(taskLi); // Remove from taskList
                removeList.appendChild(taskLi); // Append to removeList
            } else if (taskLi.parentNode === removeList) {
                removeList.removeChild(taskLi); // Remove from removeList
            }
        });

        taskList.appendChild(taskLi);
        inputTask.value = ""
    }
}

addButton.addEventListener('click', addTask);
