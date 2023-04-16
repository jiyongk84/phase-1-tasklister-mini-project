document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    handleTask(e.target.querySelector('#new-task-description').value)
    form.reset();
  })
});

function handleTask (addTask) {
  let task = document.createElement('p')
  let taskDueDate = document.querySelector('#new-task-due-date').value
  let taskDuration = document.querySelector('#new-task-duration').value
  let taskPriority = document.querySelector('#priority-selector').value
  let deleteBtn = document.createElement('button')
  deleteBtn.addEventListener('click', handleDelete)
  deleteBtn.textContent = 'x'
  task.textContent = `${addTask} : ${taskDueDate} Duration: ${taskDuration} minutes Priority: ${taskPriority}`
  task.appendChild(deleteBtn)
  document.querySelector('#tasks').appendChild(task)
}

function handleDelete (e) {
  e.target.parentNode.remove()
}
