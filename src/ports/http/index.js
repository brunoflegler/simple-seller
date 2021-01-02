const app = ({ database, server, config }) => {
  const start = () => {
    database.connect()
    server.listen(config.port)
  }

  return {
    start,
  }
}

module.exports = app
