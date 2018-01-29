// taken from a personal project of mine
// https://github.com/jhhayashi/coupon-api/blob/master/controllers/auth.js

function login(req, res, callback) {
  User.findOne({email: req.body.email}, function(err, user) {
    if (err) return callback(err)

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (err) return callback(err)
      if (!isMatch) return res.status(401).send('Incorrect password')

      // add relevant data to token
      const payload = {id: user._id, email: user.email}

      jwt.sign(payload, config.secret, {}, function(err, token) {
        if (err) return callback(err)

        user.token = token
        user.save((err) => {
          if (err) return callback(err)
          res.json({token})
        })
      })
    })
  })
}
