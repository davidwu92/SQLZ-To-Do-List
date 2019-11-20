//Model what data will look like. 
const {Model, DataTypes} = require('sequelize')

//our models need sequelize.
const sequelize = require('../config')

// This file should export an OBJECT with all the models on it. They should be received by the routes.
module.exports = {
  Todo: require('./Todo.js')(sequelize, Model, DataTypes)
}