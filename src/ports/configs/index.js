require('dotenv').config()

module.exports = {
  port: process.env.PORT,
  database: {
    endpoint: process.env.DATABASE_ENDPOINT,
  },
}
