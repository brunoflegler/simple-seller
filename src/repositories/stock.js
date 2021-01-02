const stock = ({ stockModel }) => {
  const findByCode = code => {
    return stockModel.findOne({
      code,
    })
  }

  const find = () => {
    return stockModel
      .find({
        qtd: { $gte: 1 },
      })
      .sort('-updatedAt')
  }

  const update = (id, stock) => {
    return stockModel.findByIdAndUpdate(id, stock, { new: true })
  }

  const create = stock => {
    return stockModel.create(stock)
  }

  return {
    findByCode,
    find,
    update,
    create,
  }
}

module.exports = stock
