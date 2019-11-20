
module.exports = (sequelize, Model, DataTypes) => {
  // Movie inherits all the functions from Model
  class Todo extends Model {}
  // new way to make a table in mysql
  // it plurizes table name for you in modelName:
  Todo.init(
    {
      task: DataTypes.STRING,
      isDone: {type: DataTypes.BOOLEAN, defaultValue: false}
     
    }, { sequelize, modelName: 'todo' }
  )
  return Todo
}