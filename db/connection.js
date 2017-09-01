console.log('database goes here')

const mongoose = require('mongoose')

var AuthorsSchema = new mongoos.Schema({
  name: String,
  publisher: String,
  age: integer,
  active: boolean
})

var Author = mongoose.model('Author', AuthorsSchema)
mongoose.connect('mongodb://Localhost/author')

module.exports = mongoose
