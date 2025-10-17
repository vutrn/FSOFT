let todoList = [
  {
    name: "Have breakfast",
    completed: true,
    id: 1,
  },
  {
    name: "Do homework",
    completed: false,
    id: 2,
  },
  {
    name: "Check email",
    completed: false,
    id: 3,
  },
];

const input = document.querySelector("input");
const addButton = document.querySelector("#add-button");
const inputSection = document.querySelector("#input-section");
const ul = document.querySelector("ul");
ul.style.listStyleType = "none";

let editingLi = null;
let nextId = 4; // Start from 4 since we have 3 initial items

todoList.map((item) => {
  renderList(item.name, item.completed, item.id)
})


addButton.addEventListener('click', () => {
  const inputText = input.value;

  const isExisted = document.querySelector("#error-text")
  if (isExisted) { isExisted.remove() };

  if (inputText.trim() === '') {
    const errorText = document.createElement('p')
    errorText.textContent = 'Please enter something'
    errorText.id = 'error-text'
    errorText.style = "color: red;"
    inputSection.insertAdjacentElement('afterend', errorText)
    return;
  }

  if (editingLi) {
    editingLi.firstChild.nextSibling.textContent = inputText;
    // Update todoList array
    const itemId = parseInt(editingLi.dataset.id);
    const item = todoList.find(t => t.id === itemId);
    if (item) {
      item.name = inputText;
    }
    addButton.textContent = 'Add'
    editingLi = null;
  } else {
    // Create new todo item with ID
    const newItem = {
      name: inputText,
      completed: false,
      id: nextId++
    };
    todoList.push(newItem);
    renderList(newItem.name, newItem.completed, newItem.id)
  }
  input.value = ''
})


function renderList (text, isCompleted = false, id) {
  const li = document.createElement('li')
  li.style = "margin: 8px 0;"
  li.dataset.id = id; // Store ID in data attribute

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.checked = isCompleted;
  checkbox.style = "margin-right: 8px;"

  const textSpan = document.createElement('span')
  textSpan.textContent = text;

  li.appendChild(checkbox);
  li.appendChild(textSpan);
  
  if (isCompleted) {
    li.style.textDecoration = "line-through";
    li.style.color = "gray";
  }

  const editButton = document.createElement('button')
  editButton.innerHTML = `<i class="fa-solid fa-pen"></i>`
  editButton.style = "margin: 0 8px; border: none; background: none; cursor: pointer; color: blue;"

  const deleteButton = document.createElement('button')
  deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`
  deleteButton.style = "margin: 0 8px; border: none; background: none; cursor: pointer; color: red;"

  li.appendChild(editButton)
  li.appendChild(deleteButton)
  ul.appendChild(li)

  // Checkbox change event to update completed status
  checkbox.addEventListener('change', () => {
    const itemId = parseInt(li.dataset.id);
    const item = todoList.find(t => t.id === itemId);
    if (item) {
      item.completed = checkbox.checked;
    }
    
    if (checkbox.checked) {
      li.style.textDecoration = "line-through";
      li.style.color = "gray";
    } else {
      li.style.textDecoration = "none";
      li.style.color = "black";
    }
  })

  editButton.addEventListener('click', () => {
    input.value = li.firstChild.nextSibling.textContent;
    addButton.textContent = 'Save'
    editingLi = li;
  })

  deleteButton.addEventListener('click', () => {
    // Remove from todoList array
    const itemId = parseInt(li.dataset.id);
    const index = todoList.findIndex(t => t.id === itemId);
    if (index !== -1) {
      todoList.splice(index, 1);
    }
    
    // If deleting item being edited, reset
    if (editingLi === li) {
      editingLi = null;
      addButton.textContent = 'Add';
      input.value = '';
    }
    
    li.remove()
  })
}