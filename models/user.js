// these models are meant to help mongoose with our database models
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
})

// create the model Class
const modelClass = mongoose.model('user', userSchema)

module.exports = modelClass
