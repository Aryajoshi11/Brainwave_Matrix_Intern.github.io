// Select DOM elements
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Add event listener to the Add button
addButton.addEventListener('click', addTodo);

function addTodo() {
  const taskText = todoInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create list item
  const listItem = document.createElement('li');
  listItem.className = 'todo-item';

  // Create task text
  const task = document.createElement('span');
  task.textContent = taskText;

  // Create delete button
  const deleteButton = document.createElement('button');

  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-button';

  // Append task text and delete button to list item
  listItem.appendChild(task);
  listItem.appendChild(deleteButton);

  // Append list item to todo list
  todoList.appendChild(listItem);

  // Clear input field
  todoInput.value = '';

  // Add delete functionality
  deleteButton.addEventListener('click', () => {
    todoList.removeChild(listItem);
  });
}
