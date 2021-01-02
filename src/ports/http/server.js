const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const router = express.Router()
const app = express()

const server = ({ stockController, dashboardController }) => {
  const listen = port => {
    router.get('/stocks/:code', stockController.get)
    router.get('/stocks', stockController.all)
    router.post('/stocks', stockController.create)
    router.put('/stocks/:id', stockController.update)

    router.get('/dashboard', dashboardController.all)

    app.use(bodyParser.json({ limit: '50mb' }))
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cors())
    app.use(router)

    return app.listen(port)
  }

  return {
    listen,
  }
}

module.exports = server
