const mongoose = require('mongoose')

const mongo = ({ config }) => {
  const connect = () => {
    mongoose.set('useFindAndModify', false)
    mongoose.connect(config.database.endpoint, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
  }

  return {
    connect,
    mongoose,
  }
}

module.exports = mongo
