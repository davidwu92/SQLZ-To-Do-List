//server.js
const express = require('express')
const {join} = require('path')

const app = express()
const db = require('./config') //so we grabbed sequelize! don't forget it needs to "sync".

app.use(express.static(join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

require('./routes')(app)

db.sync()
  .then(()=>app.listen(process.env.PORT || 3000, ()=>{console.log('Server listening.')}))
  .catch(e=>console.log(e))