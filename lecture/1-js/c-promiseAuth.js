function login(req, res, callback) {
  User.findOne({email: req.body.email})
    .then(function(user) {
      return user.comparePassword(req.body.password)
    })
    .then(function(isMatch) {
      // have to throw in order to break Promise chain
      if (!isMatch) {
        res.status(401).send('Incorrect password')
        throw {earlyExit: true}
      }
      const payload = {id: user._id, email: user.email}
      return jwt.sign(payload, config.secret, {})
    })
    .then(function(token) {
      user.token = token
      return user.save()
    })
    .then(function() {
      res.json({token})
    })
    .catch(function(err) {
      if (!err.earlyExit) callback(err)
    })
}
