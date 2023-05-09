require('dotenv').config()
require('./mongo')
const express = require('express');
const app = express();
const Note = require('./models/Note')

app.use(express.json());

const notes = []
app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/api/notes', (req, res) => {
  Note.find({})
    .then(notes => {
      res.json(notes)
    })
})

app.get('/api/notes/:id', (req, res) => {
  const { id } = req.params

  Note.findById(id)
    .then(note => {
      if (note) {
        return res.json(note)
      } else {
        response.status(404).end()
      }
    })
})

app.delete('/api/notes/:id', (req, res) => {
 
})

app.post('/api/notes', (req, res) => {
  const note = req.body

  const newNote = Note({
    content: note.content,
    date: new Date(),
    important: note.important || false
  })

  newNote.save()
    .then(savedNote => {
      res.json(savedNote)
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('listening on port',PORT)
})
