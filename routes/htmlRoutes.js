const { join } = require('path')

// this route is to show the survery 
module.exports = app => {

  app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../',  '/public/home.html'))
  })

  
}
