const User = require('../models/user')

exports.signup = function(req, res, next) {
  // Check if user with given email exists
  const email = req.body.email
  const pass = req.body.password

  if (!email || !pass) {
    return res
      .status(422)
      .send({ error: 'Must provibe both email and password' })
  }

  // see if user with email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err)
    }
    // if user with email does exist return error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is used' })
    }

    const user = new User({
      email: email,
      password: pass,
    })

    user.save(function(err) {
      if (err) {
        return next(err)
      }
      // if user with email doesn't exist, create user and respond
      res.json({ success: true })
    })
  })
}
