const mongoose = require('mongoose')

const connectionString = process.env.MONGO_DB_URI

//conexion
mongoose.connect(connectionString)
  .then(() => {
    console.log('connect')
  })
  .catch(err => console.error(err))
