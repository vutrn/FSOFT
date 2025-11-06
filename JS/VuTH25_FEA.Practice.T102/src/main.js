const submitBtn = document.getElementById('add-button')
const input = document.getElementById('input-text')
const ul = document.getElementById('todo-list')
const inputSection = document.getElementById('input-section')

const BASE_URL = "http://localhost:8000"
let id = 3
let editingId = null

const fetchData = async () => {
  const res = await fetch(`${BASE_URL}/todos`, { method: 'GET' });
  const data = await res.json()
  render(data)
}
fetchData()

const postData = async (newTodo) => {
  const res = await fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: newTodo,
      completed: false
    })
  })
  await res.json()
  fetchData()
}

const updateData = async (id, updatedName) => {
  const res = await fetch(`${BASE_URL}/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: updatedName
    })
  })
  await res.json()
  fetchData()
}

function render(data) {
  let li = ''
  for (let value of data) {
    li += `
    <li>
      ${value?.name}
      <div>
        <button class="edit-button" data-id="${value.id}">edit</button>
        <button class="delete-button" data-id="${value.id}">delete</button>
      </div>
    </li>`
  }
  ul.innerHTML = li

  document.querySelectorAll('.edit-button').forEach(btn => {
    btn.addEventListener('click', handleEdit)
  })
}

function handleEdit(e) {
  const id = e.target.dataset.id
  const todoItem = e.target.closest('li')
  const todoName = todoItem.firstChild.textContent.trim()
  
  input.value = todoName
  editingId = id
  submitBtn.textContent = 'Update'
}

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const inputText = input.value;

  if (inputText.trim() === '') {
    return;
  }

  if (editingId) {
    updateData(editingId, inputText)
    editingId = null
    submitBtn.textContent = 'Add'
  } else {
    postData(inputText)
  }
  
  input.value = ''
})
