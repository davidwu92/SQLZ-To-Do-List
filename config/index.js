//config/index.js
const Sequelize = require('sequelize')
//this connection lives here, so we need to export it:
module.exports = new Sequelize('mysql://root:password@localhost/movies_db')

