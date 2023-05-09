const mongoose = require('mongoose');
const { Schema, model } = mongoose
//creo el schema con los campos
const noteSchema = new Schema({
  content: String,
  date: Date,
  important: Boolean, 
})

//transformo el _id en una variable id y elimino _id y __v
noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Note = model('Note', noteSchema) //modelo para acceder a las note

module.exports = Note

// Note.find({})
// .then(results => {
//   console.log(results)
//   mongoose.connection.close()
// })
// const note = new Note({
//   content: 'MongoDB es increible',
//   date: new Date(),
//   important: true
// })

// //guardamos el objeto, y lo devuelve
// note.save()
//   .then(results => {
//     console.log(results)
//     mongoose.connection.close() //cerramos la conexion
//   })
//   .catch(err => {
//     console.error(err)
//   })