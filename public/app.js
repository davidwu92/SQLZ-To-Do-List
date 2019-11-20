//Displaying the to do list
axios.get(`/todos`)
  .then(({ data }) => {
    console.log(data)
    data.forEach(item => {
      let itemElem = document.createElement(`tr`)
      itemElem.innerHTML = `
          <p>${item.task}
          <button class="deleteItem" data-title = "${item.task}">x</button>
          </p>
          `
      document.getElementById(`tbody`).append(itemElem)
    })
  })
  .catch(e => console.error(e))

//Adding a item to the list
document.getElementById(`submit`).addEventListener(`click`, e => {
  e.preventDefault()

  let item = document.getElementById(`itemInput`).value

  const newitem = {
    task: item,
    isDone: false
  }

  document.getElementById(`itemInput`).value = ``

  axios.post(`/todo`, newitem)
    .then(() => {
      let itemElem = document.createElement(`tr`)
      itemElem.innerHTML = `
          <p>${item.title}
          <button class="deleteItem" data-title = "${item.title}">x</button>
          </p>
          `
      document.getElementById(`tbody`).append(itemElem)
    })
    .catch(e => console.log(e))

})

//Delete item off the list
document.addEventListener(`click `, e => {
  if (e.target.className === `deleteItem`) {
        
    axios.delete(`/todo/${e.target.dataset.title}`)
      .then(() => {
        console.log(e.target.parentNode)
        e.target.parentNode.parentNode.remove()
      })
  }
})
