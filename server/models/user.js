// these models are meant to help mongoose with our database models
const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

// define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
})

// on save hook, encrypt password
userSchema.pre('save', function(next) {
  // get access to the user model, user.password etc..
  const user = this

  // generate salt
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err)
    }

    // hash password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err)
      }

      // overwrite plaintext password
      user.password = hash
      next()
    })
  })
})

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  // this variabel is referencing user
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return callback(err)
    callback(null, isMatch)
  })
}

// create the model Class
const modelClass = mongoose.model('user', userSchema)

module.exports = modelClass
