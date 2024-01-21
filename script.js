document.addEventListener("DOMContentLoaded", function () {
  const taskList = document.getElementById("task-list");
  const taskInput = document.getElementById("task-input");

  window.addTask = function () {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
                <span>${taskText}</span>
                <div class="task-details">
                    <button class="edit-btn" onclick="editTask(this)">Edit</button>
                    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
                </div>
            `;
      taskList.appendChild(li);
      taskInput.value = "";
    }
  };

  window.editTask = function (element) {
    const taskText = element.parentElement.previousElementSibling;
    const newText = prompt("Edit task:", taskText.innerText);

    if (newText !== null) {
      taskText.innerText = newText;
    }
  };

  window.deleteTask = function (element) {
    const li = element.parentElement.parentElement;
    li.remove();
  };
});
