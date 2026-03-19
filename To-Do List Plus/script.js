const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const clearBtn = document.querySelector("#clearBtn");
const list = document.querySelector("#taskList");
const state = {
tasks: loadTasks()
};
function loadTasks() {
const saved = localStorage.getItem("tasks");
if (!saved) return [];
try {
return JSON.parse(saved);
} catch {
return [];
}
}
function saveTasks() {
localStorage.setItem("tasks", JSON.stringify(state.tasks));
}
function render() {
list.innerHTML = "";
state.tasks.forEach((task, index) => {
const li = document.createElement("li");
li.textContent = task+"   ";
const del = document.createElement("button");
del.textContent = "Delete";
del.addEventListener("click", () => {
state.tasks.splice(index, 1);
saveTasks();
render();
});
li.appendChild(del);
list.appendChild(li);
});
}
addBtn.addEventListener("click", () => {
const text = input.value.trim();
if (!text) return;
state.tasks.push(text);
input.value = "";
saveTasks();
render();
});
clearBtn.addEventListener("click", () => {
state.tasks = [];
saveTasks();
render();
});
render();