const sale = ({ saleModel }) => {
  const find = () => {
    return saleModel
      .find({
        qtd: { $gte: 1 },
      })
      .sort('-updatedAt')
  }

  const create = stock => {
    return saleModel.create(stock)
  }

  return {
    find,
    create,
  }
}

module.exports = sale
