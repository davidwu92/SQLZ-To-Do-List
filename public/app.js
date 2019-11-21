//Function to make the tasks show up on HTML after changes are made
const makeTask = task => {
  document.getElementById('tbody').innerHTML = ''
    task.forEach(item => {
      let itemElem = document.createElement(`tr`)
      itemElem.dataset.isdone = item.isDone
      itemElem.innerHTML = `
          <td>${item.task}</td>
          <td>${item.isDone  ? 'Complete' : 'Incomplete'}</td>
          <button class="deleteItem" data-title = "${item.id}">x</button>
          </p>
          `
      document.getElementById(`tbody`).append(itemElem)
    })
}

// getting all tasks after POST, DELETE, PUT change
const getTasks = _ => {
  axios.get(`/todos`)
  .then(({ data }) => {
    console.log(data)
      makeTask(data)
  })
  .catch(e => console.error(e))
}


//  add tasks
const addTask = task => {
  axios.post(`/todo`, task)
    .then(() => {
       getTasks()
    })
    .catch(e => console.log(e))
}

// delete tasks
const deleteTask = id => {
    axios.delete(`/todo/${id}`)
    .then(_ => {
      getTasks()
    })
    .catch(e => console.log(e))
}

// update if task is complete
const updateTask = (id, isDone) => {
    axios.put(`/todo/${id}`, isDone)
      .then(_ => {
        getTasks()
      })
      .catch(e => console.log(e))
}




// event listener that adds task to list on submit
document.getElementById(`submit`).addEventListener(`click`, e => {
  e.preventDefault()
  let item = document.getElementById(`itemInput`).value
  addTask({
    task: item,
    isDone: false
  }) 
document.getElementById(`itemInput`).value = ``
})

// event listener that deletes task from list on delete
document.addEventListener(`click`, e => {
  if (e.target.className === `deleteItem`) {
    deleteTask(parseInt(e.target.dataset.title))
  } else if (e.target.tagName === 'TD') {
    console.log(e.target.parentNode.dataset.isdone)
    updateTask(parseInt(e.target.parentNode.childNodes[5].dataset.title), {
      isDone:
      e.target.parentNode.dataset.isdone === 'false' ? true : false
    })
  }
})

getTasks()
