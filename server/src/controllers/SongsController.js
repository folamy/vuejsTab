const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (error) {
      res.status(500).send({
        error: 'An error has occoured trying to fetch the songs'
      })
    }
  },

  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (error) {
      res.status(500).send({
        error: 'An error has occoured trying to fetch the songs'
      })
    }
  },

  async post (req, res) {
    try {
      const songs = await Song.create(req.body)
      res.send(songs)
    } catch (error) {
      res.status(500).send({
        error: 'An error has occoured trying to create the song'        
      })
    }
  }
}
