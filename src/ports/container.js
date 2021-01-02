const { createContainer, asFunction, asValue } = require('awilix')

const app = require('./http')
const server = require('./http/server')

const stockController = require('./http/controllers/stock')
const stockRepository = require('../repositories/stock')
const stockModel = require('./database/mongo/models/stock')
const stockValidator = require('./http/controllers/validators/stock')

const saleController = require('./http/controllers/sale')
const saleRepository = require('../repositories/sale')
const saleModel = require('./database/mongo/models/sale')

const dashboardController = require('./http/controllers/dashboard')

const database = require('./database/mongo')

const validateSchema = require('./http/middlewares/validateSchema')

const config = require('./configs')

const container = createContainer()

container.register({
  app: asFunction(app),
  server: asFunction(server),
  stockController: asFunction(stockController),
  stockRepository: asFunction(stockRepository),
  stockModel: asFunction(stockModel).singleton(),
  stockValidator: asFunction(stockValidator),
  saleModel: asFunction(saleModel).singleton(),
  saleController: asFunction(saleController),
  saleRepository: asFunction(saleRepository),
  dashboardController: asFunction(dashboardController),
  database: asFunction(database),
  validateSchema: asValue(validateSchema),
  config: asValue(config),
})

module.exports = container
