//routes/index.js
module.exports = app =>{
  // pass express app to other route files.
  require('./todoRoutes.js')(app)
}