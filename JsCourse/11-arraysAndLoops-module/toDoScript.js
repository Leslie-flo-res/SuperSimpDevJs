const todoList = [
  {
    name: "eat ",
    dueDate: "2025-03-22",
  },
  {
    name: "pray ",
    dueDate: "2025-03-25",
  },
];
renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name} </div>
    <div>${dueDate} </div>
    <button onclick="
    todoList.splice(${i},1);
    renderTodoList();
    " class="delete-btn">Delete</button>
  
    `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({ name, dueDate });
  inputElement.value = "";
  renderTodoList();
}

const [firstValue, secondValue] = [1, 2, 3];
console.log(firstValue);