const sale = ({ database }) => {
  const { model, Schema } = database.mongoose

  const item = new Schema({
    code: String,
    name: String,
    value: Number,
  })

  const schema = new Schema(
    {
      sold: Date,
      description: String,
      paymentMethod: String,
      installments: Number,
      total: Number,
      itens: [item],
    },
    {
      timestamps: true,
    }
  )

  return model('Sale', schema)
}

module.exports = sale
