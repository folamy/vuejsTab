const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationPolicy = require('./policies/AuthenticationPolicy')

module.exports = (route) => {
  route.post('/register',
    AuthenticationPolicy.register,
    AuthenticationController.register)
}
