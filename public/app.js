//Displaying the to do list
axios.get(`/items`)
  .then(({ data }) => {
    data.foreach(item => {
      let itemElem = document.createElement(`tr`)
      itemElem.innerHTML = `
          <p>${item.title}
          <button class="deleteItem" data-title = "${item.title}">x</button>
          </p>
          `
      document.getElementById(`tbody`).append(itemElem)
    })
  })
  .catch(e => console.error(e))

//Adding a item to the list
document.getElementById(`submit`).addEventListener(`click`, e => {
  e.preventDefault()

  let newItem = document.getElementById(`newItem`).value

  const newitem = {
    title: `newItem`,
    done: false
  }

  document.getElementById(`newItem`).value = ``

  axios.post(`/items`, newitem)
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
  if (event.target.className === `deleteItem`) {
    axios.delete(`/items/${event.target.dataset.title}`)
      .then(() => {
        event.target.parentNode.parentNode.remove()
      })
  }
})
