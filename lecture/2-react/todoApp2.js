const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

//  <li>
//    <input type="checkbox" />
//    <button>delete</button>
//    <span>text</span>
//  </li>

function createTodo() {
  const li = document.createElement('li')
  li.innerHTML = `
    <input type="checkbox" />
    <button>delete</button>
    <span>text</span>
  `
  return li
}

function newTodo() {
  // get text

  // invoke createTodo()

  // update counts

  // apend to list
}

function deleteTodo() {
  // find the todo to delete
  // remove
  // update counts
}
