const mongoose = require('mongoose')

mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

console.log(mongoose.connection.readyState);


const db = mongoose.connection

module.exports = db
