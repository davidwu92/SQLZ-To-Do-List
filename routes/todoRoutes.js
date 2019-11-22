const { Todo } = require('../models')

module.exports = app => {
  // get all Todo
  app.get('/todos', (req, res) => {
    // able to get the data from mySQL
    
    Todo.findAll()
      .then(todos => {
        // express gives us the simple data that we are looking for
        res.json(todos)
      })
      .catch(e => console.log(e))
  })


//  add Todo
app.post('/todo', (req, res) => {
  Todo.create(req.body)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(e => console.log(e))
})

// update Todo
app.put('/todo/:id', (req, res) => {
  Todo.findOne({
    where: { id: parseInt(req.params.id) }
  })
    .then(todo => todo.update(req.body))
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e))
})

// delete Todo
app.delete('/todo/:id', (req, res) => {
  Todo.findOne({
    where: { id: parseInt(req.params.id) }
  })
    .then(todo => todo.destroy())
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e))
})
}