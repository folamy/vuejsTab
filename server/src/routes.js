const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationPolicy = require('./policies/AuthenticationPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (route) => {
  route.post('/register',
    AuthenticationPolicy.register,
    AuthenticationController.register)

  route.post('/login',
    AuthenticationController.login)

  route.get('/songs',
    SongsController.index)

  route.get('/songs/:songId',
    SongsController.show)

  route.put('/songs/:songId',
    SongsController.put)

  route.post('/songs',
    SongsController.post)
}
