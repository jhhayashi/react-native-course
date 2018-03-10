const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
}

const list = document.getElementById('todo-list')
const itemCountDiv = document.getElementById('item-count')
const uncheckedCountDiv = document.getElementById('unchecked-count')

let todos = []

function count(arr, fn) {
  return arr.reduce((acc, next) => fn(next) ? acc + 1 : acc, 0)
}

function Todo(name) {
  this.name = name || 'New TODO'
  this.checked = false
  this.element = null
  this.checkbox = null
}

Todo.prototype.toggleCheck = function() {
  this.checked = !this.checked
  if (this.element && this.checkbox) {
    this.checkbox.checked = this.checked
  } else {
    this.element = renderTodo(this)
  }
}

function renderTodo(todo) {
  if (todo.element) return todo.element

  const checkbox = document.createElement('input')
  checkbox.className = classNames.TODO_CHECKBOX
  checkbox.type = 'checkbox'
  checkbox.checked = todo.checked
  // keep reference of todo in checkbox so it can be updated on change
  checkbox.todoRef = todo
  checkbox.onchange = toggleChecked

  const span = document.createElement('span')
  span.className = classNames.TODO_TEXT
  span.setAttribute('contenteditable', 'true')
  span.innerHTML = todo.name

  const li = document.createElement('li')
  li.className = classNames.TODO_ITEM
  li.appendChild(checkbox)
  li.appendChild(span)

  // keep reference of element on todo for performance
  todo.element = li
  todo.checkbox = checkbox

  return li
}

function render() {
  list.innerHTML = ''
  todos.map(renderTodo).forEach(todo => list.appendChild(todo))
  uncheckedCountDiv.innerHTML = count(todos, todo => !todo.checked)
  itemCountDiv.innerHTML = todos.length
  return false
}

function addTodo(name) {
  const todo = new Todo(name)
  todos.push(todo)
  return render()
}

function toggleChecked() {
  this.todoRef.toggleCheck()
  return render()
}
