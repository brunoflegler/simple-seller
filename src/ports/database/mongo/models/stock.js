const stock = ({ database }) => {
  const { model, Schema } = database.mongoose

  const schema = new Schema(
    {
      code: {
        type: String,
        unique: true,
      },
      name: String,
      cost: Number,
      value: Number,
      qtd: Number,
    },
    {
      timestamps: true,
    }
  )

  return model('Stock', schema)
}

module.exports = stock
