const passport = require('passport')
const User = require('../models/user')
const config = require('../config')
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')

// create local strategy for login
const localOptions = { usernameField: 'email' }
const localLogin = new LocalStrategy(localOptions, function(
  email,
  password,
  done
) {
  // email and password are from the request

  // verify this username and password,
  // call done with the user if it's correct
  // call done with false if it's not correct
  User.findOne({ email: email }, function(err, user) {
    if (err) {
      return done(err, false)
    }
    if (!user) {
      return done(null, false)
    }
    // compare password
    user.comparePassword(password, function(err, isMatch) {
      if (err) done(err)
      if (!isMatch) return done(null, false)

      return done(null, user)
    })
  })
})

// strategy is a passport authentication process
// set up options for jwt strategy
const jwtOptions = {
  // define that the token comes from the authorization header specifically
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret,
}

// create jwt strategy
const jwtLogin = new JWTStrategy(jwtOptions, function(payload, done) {
  // payload is deconstructed jwt
  // done is a cb we call to successfully authenticate user

  // steps
  // see if user id exists in our db
  // if it does call 'done' with that user
  User.findById(payload.sub, function(err, user) {
    if (err) {
      return done(err, false)
    }
    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
  })
})

// tell passport to use this strategy
passport.use(jwtLogin)
passport.use(localLogin)
