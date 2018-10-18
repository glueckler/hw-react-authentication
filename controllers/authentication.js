exports.signup = function(req, res, next) {
  // Check if user with given email exists
  const email = req.body.email
  const pass = req.body.password

  // if user with email does exist return error

  // if user with email doesn't exist, create user and respond
}
